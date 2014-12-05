
//console.log("mypositions: " + myPositions);

var container;
var camera, scene, renderer, objects;

var ArmXYZ = new Array();
ArmXYZ = ['0.0', '0.0', '0.0'];


var Angles = new Array(8);

var meshGroup = new Array(myPositions.length);

function init()  //init function
{

    console.log("init Function Called.");

    container = document.getElementById("animation");
    camera = new THREE.PerspectiveCamera( 15, container.clientWidth / container.clientHeight, 1, 15000 );
     // camera.position.set( 100, -3480, 1000 );
     //  camera.position.set( 100, -4000, 1000 );
    camera.position.set( 0, -3800, 1200 );
    scene = new THREE.Scene();
    group = new THREE.Object3D();

    scene.fog = new THREE.Fog( 0x808080, 2, 15000 );

    // Grid

    var size = 20, step = 0.25;				
    var geometry = new THREE.Geometry();
    var material = new THREE.LineBasicMaterial( { color: 0x000000 } );

    for ( var i = - size; i <= size; i += step ) 
    {
      	geometry.vertices.push( new THREE.Vector3( - size, - 0.04, i ) );
      	geometry.vertices.push( new THREE.Vector3(   size, - 0.04, i ) );

      	geometry.vertices.push( new THREE.Vector3( i, - 0.04, - size ) );
      	geometry.vertices.push( new THREE.Vector3( i, - 0.04,   size ) );

    }

    var line = new THREE.Line( geometry, material, THREE.LinePieces );
    line.position.y = -0.46;
    // scene.add( line );

    // Ground

    var plane = new THREE.Mesh( new THREE.PlaneGeometry( 40, 40 ), new THREE.MeshPhongMaterial( { ambient: 0x999999, color: 0x999999, specular: 0x101010 } ) );
    plane.rotation.x = -Math.PI/2;
    plane.position.y = -0.5;
    // scene.add( plane );

    // plane.receiveShadow = true;

    // Lights

    scene.add( new THREE.AmbientLight( 0x777777 ) );

   // addShadowedLight( 1, 1, 1, 0xffffff, 1.35 );
   // addShadowedLight( 0.5, 1, -1, 0xffaa00, 1 );
   

    addShadowedLight( 1, -0.5, 1, 0xffffff, 1.35 );
    addShadowedLight( 0.5, 1, -1, 0xffaa00, 1 );


    // addShadowedLight( 0.2, 1, -1, 0xffffff, 5 );

    // renderer
    renderer = Detector.webgl? new THREE.WebGLRenderer(): new THREE.CanvasRenderer();
    
   // renderer = new THREE.WebGLRenderer( { antialias: true, clearColor: 0x111111, clearAlpha: 1, alpha: false } );

    renderer.setSize( container.clientWidth, container.clientHeight );
    renderer.setClearColor( scene.fog.color, 1 );

    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.physicallyBasedShading = true;

    renderer.shadowMapEnabled = true;
    renderer.shadowMapCullFace = THREE.CullFaceBack;

    container.appendChild( renderer.domElement );

    //

    window.addEventListener( 'resize', onWindowResize, false );

}	// init ended here



function addShadowedLight( x, y, z, color, intensity ) {

    console.log("addShadowedLight Function Called.");

    var directionalLight = new THREE.DirectionalLight( color, intensity );
    directionalLight.position.set( x, y, z )
    scene.add( directionalLight );

    directionalLight.castShadow = true;
    // directionalLight.shadowCameraVisible = true;

    var d = 1;
    directionalLight.shadowCameraLeft = -d;
    directionalLight.shadowCameraRight = d;
    directionalLight.shadowCameraTop = d;
    directionalLight.shadowCameraBottom = -d;

    directionalLight.shadowCameraNear = 1;
    directionalLight.shadowCameraFar = 4;

    directionalLight.shadowMapWidth = 2048;
    directionalLight.shadowMapHeight = 2048;

    directionalLight.shadowBias = -0.005;
    directionalLight.shadowDarkness = 0.15;

}

function onWindowResize() {

      console.log("onWindowResize Function Called.");

//    camera.aspect = window.innerWidth / window.innerHeight;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
//    renderer.setSize( window.innerWidth, window.innerHeight );

   renderer.setSize( container.clientWidth, container.clientHeight );

}

function render() {

    console.log("render Function Called.");
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}

//note. this is called before the last load is done.
var lastLoad = 0;
var count = 0;

function loadObjects()
{
    console.log("loadObjects Function Called.");
    // Objects
    lastLoad = 0;
    count = 0;
    
    var loader = new THREE.STLLoader();	
    loader.addEventListener( 'load', function ( event ) {
	
      	count++;
      	var index = event.index;
   //   console.log("event.index value: "+ index);
      	var geometry = event.content;
  	   switch (index) {
            
            case 0:
                    var material0 = new THREE.MeshPhongMaterial( { ambient: 0x262B30, color: 0x262B30, specular: 0x111111, shininess: 200 } );
                    var mesh0 =  new THREE.Mesh( geometry, material0 );
                    mesh0.castShadow = true;
                    mesh0.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh0.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh0;
                    break;
            case 1:
                    var material2 = new THREE.MeshPhongMaterial( { ambient: 0x3B95E3, color: 0x3B95E3, specular: 0x111111, shininess: 200 } );
                    var mesh2 =  new THREE.Mesh( geometry, material2 );
                    mesh2.castShadow = true;
                    mesh2.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh2.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh2;
                    break;
            case 2:
                    var material2 = new THREE.MeshPhongMaterial( { ambient: 0x797F85, color: 0x797F85, specular: 0x111111, shininess: 200 } );
                    var mesh2 =  new THREE.Mesh( geometry, material2 );
                    mesh2.castShadow = true;
                    mesh2.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh2.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh2;
                    break;
            
               
            case 3:
                    var material3 = new THREE.MeshPhongMaterial( { ambient: 0x797F85, color: 0x797F85, specular: 0x111111, shininess: 200 } );
                    var mesh3 =  new THREE.Mesh( geometry, material3 );
                    mesh3.castShadow = true;
                    mesh3.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh3.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh3;
                    break;
            
               
            case 4:
                    var material4 = new THREE.MeshPhongMaterial( { ambient: 0x797F85, color: 0x797F85, specular: 0x111111, shininess: 200 } );
                    var mesh4 =  new THREE.Mesh( geometry, material4 );
                    mesh4.castShadow = true;
                    mesh4.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh4.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh4;
                    break;
            
               
            case 5:
                    var material5 = new THREE.MeshPhongMaterial( { ambient: 0x3B95E3, color: 0x3B95E3, specular: 0x111111, shininess: 200 } );
                    var mesh5 =  new THREE.Mesh( geometry, material5 );
                    mesh5.castShadow = true;
                    mesh5.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh5.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh5;
                    break;
            
               
            case  6:
                    var material6 = new THREE.MeshPhongMaterial( { ambient: 0x3B95E3, color: 0x3B95E3, specular: 0x111111, shininess: 200 } );
                    var mesh6 =  new THREE.Mesh( geometry, material6 );
                    mesh6.castShadow = true;
                    mesh6.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh6.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh6;
                    break;
          
               
            case  7:
                    var material7 = new THREE.MeshPhongMaterial( { ambient: 0x3B95E3, color: 0x3B95E3, specular: 0x111111, shininess: 200 } );
                    var mesh7 =  new THREE.Mesh( geometry, material7 );
                    mesh7.castShadow = true;
                    mesh7.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh7.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh7;
                    break;
            
               
            case  8:
                    var material8 = new THREE.MeshPhongMaterial( { ambient: 0x3B95E3, color: 0x3B95E3, specular: 0x111111, shininess: 200 } );
                    var mesh8 =  new THREE.Mesh( geometry, material8 );
                    mesh8.castShadow = true;
                    mesh8.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh8.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh8;
                    break;
            
               
            case  9:
                    var material9 = new THREE.MeshPhongMaterial( { ambient: 0x3B95E3, color: 0x3B95E3, specular: 0x111111, shininess: 200 } );
                    var mesh9 =  new THREE.Mesh( geometry, material9 );
                    mesh9.castShadow = true;
                    mesh9.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh9.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh9;
                    break;
            
               
            case  10:
                    var material10 = new THREE.MeshPhongMaterial( { ambient: 0x184369, color: 0x184369, specular: 0x111111, shininess: 200 } );
                    var mesh10 =  new THREE.Mesh( geometry, material10 );
                    mesh10.castShadow = true;
                    mesh10.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh10.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh10;
                    break;
             case  11:
                    var material11 = new THREE.MeshPhongMaterial( { ambient: 0x184369, color: 0x184369, specular: 0x111111, shininess: 200 } );
                    var mesh11 =  new THREE.Mesh( geometry, material11 );
                    mesh11.castShadow = true;
                    mesh11.receiveShadow = true;
                    //console.log("mesh"+index+".position: "+ myPositions[index][0]+","+ myPositions[index][1]+","+ myPositions[index][2]);
                    mesh11.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh11;
                    break;
            default:
                    var material = new THREE.MeshPhongMaterial( { ambient: 0xff5533, color: 0xff5533, specular: 0x111111, shininess: 200 } );
                    var mesh =  new THREE.Mesh( geometry, material );
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    //console.log("Mesh Position set : myPositions:- " + myPositions[index][0] + "==="+ + myPositions[index][1]+ "==="+ + myPositions[index][2]);
                    mesh.position.set(myPositions[index][0], myPositions[index][1], myPositions[index][2]);
                    meshGroup[index] = mesh;
                    break;
        } 
  	   
  	    if(count ==  myObjects.length)
  	    {
        		scene.add(meshGroup[0]);
        		for(var j = 0; j < myObjects.length - 1; j++)
        		meshGroup[j].add(meshGroup[j+1]);	
        		lastLoad = 1;
  	    }
    } );
      
    for(var j = 0; j < myObjects.length; j++)
    {
  	      loader.load(myObjects[j], 0, j);
    }

}





function UpdateAnimation(data){


    console.log("UpdateAnimation Function Called.");

     if((data.Button1 == 0) && (data.Button2 == 0) && (data.Button3 == 0)){
      return;
     }

//	console.log(data);
    if(lastLoad == 0)
	return;
    
    var x=0.0, y=0.0, z=0.0;
    var minChange = 10;

    x = ArmXYZ[0];
    y = ArmXYZ[1];
    z = ArmXYZ[2];


    if((Math.abs(x-data.X) < minChange) && (Math.abs(y-data.y) < minChange) && (Math.abs(z-data.Z) < minChange))
	return;


    var angleIndex = 0;
    for(var j = 0; j < myObjects.length; j++)
    
	    if(myAxes[j] != " ")
	{
	    if(myAxes[j] == "X")
		meshGroup[j].rotation.x = data.Angles[angleIndex];
	    else if(myAxes[j] == "Y")
		meshGroup[j].rotation.y = data.Angles[angleIndex];
	    else
		meshGroup[j].rotation.z = data.Angles[angleIndex];
	    angleIndex +=1;
	}

    render();
}
function UpdateAnimationSS(data){

   console.log("UpdateAnimationSS Function Called.");
   console.log("===============================");
   console.log("Data.Angles:"+ data.Angles);
   console.log("===============================");

    if(lastLoad == 0)
    return;
    
    var x=0.0, y=0.0, z=0.0;
   
    x = ArmXYZ[0];
    y = ArmXYZ[1];
    z = ArmXYZ[2]

    var angleIndex = 0;
    for(var j = 0; j < myObjects.length; j++)
    {
    if(myAxes[j] != " ")
    {
        if(myAxes[j] == "X")
            meshGroup[j].rotation.x = data.Angles[angleIndex];
        else if(myAxes[j] == "Y")
            meshGroup[j].rotation.y = data.Angles[angleIndex];
        else
            meshGroup[j].rotation.z = data.Angles[angleIndex];
        angleIndex +=1;
    }
    }

    render();
}
