/* ==========================================================================
   GLOBO 3D (Three.js via CDN)
   - Carrega o Three.js da internet SÓ quando necessário (aba Grupo Extreme).
   - Se não houver internet ou WebGL, NÃO quebra nada: a cartilha segue normal
     e mostramos uma mensagem discreta (o mapa 2D continua disponível na home).
   - Funciona quando o site está publicado (GitHub Pages tem internet).
   ========================================================================== */

let _threeLoaded = false;
let _threeLoading = null;
let _globeCleanup = null;

/* Carrega o Three.js uma única vez (via CDN). Retorna uma Promise. */
function carregarThree(){
  if(_threeLoaded) return Promise.resolve(true);
  if(_threeLoading) return _threeLoading;
  _threeLoading = new Promise((resolve)=>{
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    s.async = true;
    s.onload = ()=>{ _threeLoaded = true; resolve(true); };
    s.onerror = ()=>{ resolve(false); }; // sem internet/CDN: falha graciosamente
    document.head.appendChild(s);
  });
  return _threeLoading;
}

/* Inicializa o globo dentro do elemento #globe3d (se existir na tela). */
async function iniciarGlobo(){
  const host = document.getElementById("globe3d");
  if(!host) return;
  // evita rodar duas vezes
  if(_globeCleanup){ _globeCleanup(); _globeCleanup = null; }

  const ok = await carregarThree();
  if(!ok || !window.THREE){
    host.innerHTML = `<div class="globe-fallback">🌐 O globo 3D aparece quando o site está publicado e com internet.<br>
      <small>Enquanto isso, veja o mapa de presença na aba Início.</small></div>`;
    return;
  }

  const THREE = window.THREE;
  const w = host.clientWidth || 360;
  const h = 360;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 100);
  camera.position.z = 3.2;

  const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  host.innerHTML = "";
  host.appendChild(renderer.domElement);

  // esfera (globo) com cor da marca
  const geo = new THREE.SphereGeometry(1, 48, 48);
  const mat = new THREE.MeshPhongMaterial({
    color: 0x1573c4, emissive: 0x0b2a4a, shininess: 18, transparent:true, opacity:0.92
  });
  const globe = new THREE.Mesh(geo, mat);
  scene.add(globe);

  // "grade" de wireframe por cima (cara de rede/tech)
  const wire = new THREE.Mesh(
    new THREE.SphereGeometry(1.012, 24, 24),
    new THREE.MeshBasicMaterial({ color:0x36b54a, wireframe:true, transparent:true, opacity:0.22 })
  );
  scene.add(wire);

  // pontos (localizações) na superfície
  function latLonToVec(lat, lon, r){
    const phi = (90 - lat) * Math.PI/180;
    const theta = (lon + 180) * Math.PI/180;
    return new THREE.Vector3(
      -r*Math.sin(phi)*Math.cos(theta),
      r*Math.cos(phi),
      r*Math.sin(phi)*Math.sin(theta)
    );
  }
  const locais = [
    [-22.9,-43.2],[-23.5,-46.6],[-21.2,-47.8],[-15.8,-47.9], // RJ, SP, Ribeirão, Brasília
    [1.3,103.8],[22.3,114.1],[25.2,55.3] // presença global (ex.: APAC/EMEA)
  ];
  const pontos = new THREE.Group();
  locais.forEach(([la,lo])=>{
    const p = new THREE.Mesh(
      new THREE.SphereGeometry(0.03, 10, 10),
      new THREE.MeshBasicMaterial({ color:0x9ae635 })
    );
    p.position.copy(latLonToVec(la, lo, 1.02));
    pontos.add(p);
  });
  globe.add(pontos);

  // luzes
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const dir = new THREE.DirectionalLight(0xffffff, 0.9);
  dir.position.set(3, 2, 4);
  scene.add(dir);

  // interação: arrastar para girar
  let dragging=false, px=0, autorot=true, rotY=0, rotX=0.2;
  const dom = renderer.domElement;
  dom.style.cursor = "grab";
  const onDown = e=>{ dragging=true; autorot=false; px=(e.touches?e.touches[0].clientX:e.clientX); dom.style.cursor="grabbing"; };
  const onUp   = ()=>{ dragging=false; dom.style.cursor="grab"; };
  const onMove = e=>{ if(!dragging) return; const x=(e.touches?e.touches[0].clientX:e.clientX); rotY += (x-px)*0.01; px=x; };
  dom.addEventListener("mousedown", onDown); window.addEventListener("mouseup", onUp); window.addEventListener("mousemove", onMove);
  dom.addEventListener("touchstart", onDown, {passive:true}); window.addEventListener("touchend", onUp); window.addEventListener("touchmove", onMove, {passive:true});

  let raf;
  function loop(){
    if(autorot) rotY += 0.0035;
    globe.rotation.y = rotY; globe.rotation.x = rotX;
    wire.rotation.y = rotY; wire.rotation.x = rotX;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  }
  loop();

  function onResize(){
    const nw = host.clientWidth || 360;
    camera.aspect = nw/h; camera.updateProjectionMatrix();
    renderer.setSize(nw, h);
  }
  window.addEventListener("resize", onResize);

  _globeCleanup = ()=>{
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("mouseup", onUp); window.removeEventListener("mousemove", onMove);
    window.removeEventListener("touchend", onUp); window.removeEventListener("touchmove", onMove);
    renderer.dispose(); host.innerHTML = "";
  };
}
