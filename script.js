Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.textAnimate(".magnet")
Shery.hoverWithMediaCircle(".hover-target",{
    images: ["i1.jpg", "i2.jpg", "i3.jpg"]
  });
Shery.imageEffect(".image", {
    style: 2,
    config: 
        {"resolutionXY":{"value":85.14},"distortion":{"value":true},"mode":{"value":-2},"mousemove":{"value":1},"modeA":{"value":3},"modeN":{"value":0},"speed":{"value":-358.11,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":681.08,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":1.59,"range":[0,3.141592653589793]},"waveFactor":{"value":0.69,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":31.08,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":3.85,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.07,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        preset: "./presets/wigglewobble.json",
  });

  Shery.imageEffect(".images", {
    style: 6,
    config:{"noiseDetail":{"value":15.7,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":28.93,"range":[0,100]},"speed":{"value":0.26,"range":[0,1]},"aspect":{"value":1.74375},"gooey":{"value":true},"infiniteGooey":{"value":true},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.25,"range":[0,10]},"metaball":{"value":0.48,"range":[0,2]},"discard_threshold":{"value":0.59,"range":[0,1]},"antialias_threshold":{"value":0.06,"range":[0,0.1]},"noise_height":{"value":0.15,"range":[0,2]},"noise_scale":{"value":56.2,"range":[0,100]}},
  });