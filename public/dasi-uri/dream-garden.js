/* Painted assets use the same world coordinates as the interactive garden. */
(function () {
  const structures = {
    hall: [18, 0, 400, 426],
    altar: [465, 42, 399, 376],
    flower: [890, 99, 439, 316],
    tree: [1331, 0, 443, 433],
    cairn: [27, 469, 389, 405],
    info: [446, 454, 436, 422],
    portal: [908, 449, 406, 430]
  };
  const guardians = [
    [149, 65, 238, 420],
    [639, 70, 255, 415],
    [1156, 62, 216, 423],
    [169, 550, 207, 429],
    [629, 562, 263, 416],
    [1164, 552, 208, 426]
  ];

  function sprite(box, file, sheetWidth, sheetHeight, fitted) {
    const [x, y, width, height] = box;
    return '<svg class="garden-sprite" viewBox="0 0 '+width+' '+height+'" preserveAspectRatio="'+(fitted?'xMidYMid':'xMidYMax')+' meet" aria-hidden="true">'
      + '<svg width="'+width+'" height="'+height+'" viewBox="'+box.join(' ')+'" style="overflow:hidden">'
      + '<image href="'+file+'" width="'+sheetWidth+'" height="'+sheetHeight+'"/></svg></svg>';
  }

  const memorial = {
    lit: [110, 70, 430, 485],
    unlit: [705, 70, 435, 485],
    flower: [89, 670, 446, 535],
    letter: [656, 719, 546, 444]
  };
  const urns = {
    white: [99, 89, 345, 383],
    wood: [591, 89, 347, 384],
    sky: [1085, 88, 350, 385],
    pink: [98, 569, 347, 388],
    mint: [590, 569, 351, 387],
    navy: [1085, 569, 352, 389]
  };
  const keepsakes = {
    ball: [137, 152, 208, 208],
    bone: [534, 170, 288, 159],
    flower: [1001, 59, 199, 368],
    collar: [1395, 142, 301, 251],
    bear: [101, 495, 280, 351],
    treat: [538, 508, 255, 316],
    ribbon: [931, 540, 352, 265],
    frame: [1415, 500, 267, 331]
  };
  const covers = ["pet","sea","snow","blossom","cake","ball","camp","picnic","jeju","bath","nap","drive"];

  const petPresets = {
    poodle: [62, 22, 314, 337],
    shiba: [434, 14, 270, 345],
    corgi: [757, 27, 263, 332],
    jindo: [1114, 8, 278, 351],
    mix: [63, 371, 305, 324],
    d7: [402, 370, 307, 325],
    d8: [761, 370, 271, 325],
    d12: [1072, 373, 314, 322],
    cheese: [89, 705, 275, 363],
    mackerel: [431, 710, 275, 356],
    russian: [772, 705, 268, 361],
    calico: [1111, 708, 277, 358]
  };
  const moreDogs = {
    d9:[57,29,347,403], d10:[523,15,320,416], d11:[939,38,343,393], d13:[1369,26,365,404],
    d15:[96,458,301,416], d16:[505,486,329,387], d17:[978,459,292,414], d18:[1384,489,335,383]
  };
  const morePets = {
    d14:[60,19,347,407], tuxedo:[530,14,316,413], c6:[973,15,317,412], c7:[1419,14,315,413],
    c8:[88,486,321,386], c9:[532,460,316,412], c10:[970,490,319,382], c11:[1419,460,316,412]
  };

  // Tight alpha bounds keep the visible silhouette centered in each editor slot.
  const frontFit = {
    poodle: [67,25,305,331],
    shiba: [438,18,262,336],
    corgi: [762,31,254,323],
    jindo: [1118,13,270,341],
    mix: [68,375,295,316],
    d7: [406,374,299,317],
    d8: [765,374,263,316],
    d12: [1076,378,306,312],
    cheese: [93,709,266,353],
    mackerel: [435,713,267,349],
    russian: [776,709,259,353],
    calico: [1115,713,269,349],
    d9: [60,32,341,396],
    d10: [526,19,313,408],
    d11: [942,41,337,386],
    d13: [1373,29,358,398],
    d15: [99,462,294,407],
    d16: [508,489,323,381],
    d17: [981,463,285,406],
    d18: [1387,492,329,377],
    d14: [64,23,340,399],
    tuxedo: [534,19,308,404],
    c6: [977,19,309,404],
    c7: [1423,19,307,404],
    c8: [92,490,313,378],
    c9: [536,465,308,403],
    c10: [974,494,311,373],
    c11: [1423,465,308,403],
    maltese: [174,79,879,1054]
  };
  const malteseFit = {"side":[201,51,585,791],"back":[1003,49,605,796]};
  const turnaroundFit = [
    [7,5,177,181], [199,5,177,182], [392,5,176,182], [584,5,176,182],
    [790,5,147,182], [1001,5,109,182], [1182,5,132,182], [1391,5,97,182],
    [5,201,182,174], [197,202,182,172], [389,200,182,176], [581,204,182,167],
    [792,197,143,182], [983,197,146,182], [1176,197,143,182], [1369,197,142,182],
    [5,392,182,175], [198,389,179,182], [389,402,182,156], [581,393,182,174],
    [802,389,124,182], [1005,389,102,182], [1190,389,115,182], [1381,389,118,182],
    [5,588,182,168], [197,597,182,150], [389,587,182,170], [581,595,182,153],
    [822,581,84,182], [1002,581,107,182], [1207,581,82,182], [1382,581,116,182],
    [7,773,177,182], [197,774,182,180], [389,773,182,181], [582,773,179,182],
    [802,773,124,182], [1003,773,106,182], [1194,773,107,182], [1387,773,106,182],
    [5,966,182,180], [197,965,182,182], [389,965,182,181], [581,965,182,181],
    [811,965,106,182], [1003,965,105,182], [1196,965,104,182], [1388,965,104,182],
    [17,1157,158,182], [209,1157,155,182], [399,1157,162,182], [596,1157,152,182],
    [805,1157,117,182], [1002,1157,107,182], [1189,1157,117,182], [1385,1157,110,182],
    [20,1349,152,182], [204,1349,168,182], [391,1349,178,182], [581,1360,182,159],
    [813,1349,102,182], [1010,1349,91,182], [1204,1349,88,182], [1383,1349,113,182],
    [36,1540,119,185], [236,1540,104,184], [428,1539,104,186], [613,1540,118,184]
  ];
  const customFit = [
    [36,5,119,182], [218,5,140,182], [406,5,148,182], [597,5,150,182],
    [804,4,119,184], [989,4,132,184], [22,197,147,182], [208,197,160,182],
    [400,197,160,182], [593,197,157,181], [800,196,126,184], [988,196,136,183],
    [46,389,99,182], [225,389,126,182], [416,389,128,182], [602,389,140,182],
    [807,389,113,183], [994,389,123,183]
  ];
  function paintedPetPreset(id, fitted, alignFeet = false) {
    if (petPresets[id]) return sprite(fitted ? frontFit[id] : petPresets[id], 'pet-painted-presets.png', 1448, 1086, fitted && !alignFeet);
    if (moreDogs[id]) return sprite(fitted ? frontFit[id] : moreDogs[id], 'pet-painted-more-dogs.png', 1774, 887, fitted && !alignFeet);
    if (morePets[id]) return sprite(fitted ? frontFit[id] : morePets[id], 'pet-painted-more-cats.png', 1774, 887, fitted && !alignFeet);
    return '';
  }
  const turnaroundGroups = [
    ["poodle","shiba","corgi","jindo","mix","d7","d8","d12"],
    ["d9","d10","d11","d13","d15","d16","d17","d18"],
    ["d14","cheese","mackerel","russian","calico","tuxedo","c6","c7"],
    ["c8","c9","c10","c11","spottedCat","spottedDog","tuxDog","stripedDog"]
  ];
  const turnaroundSlots = new Map();
  turnaroundGroups.forEach((group, sheet) => {
    group.forEach((id, index) => {
      const profile = sheet * 16 + index + (index >= 4 ? 4 : 0);
      turnaroundSlots.set(id, {side: profile, back: profile + 4});
    });
  });
  function turnaroundSprite(slot, fitted, alignFeet = false) {
    const box = fitted ? turnaroundFit[slot] : [slot % 8 * 192, Math.floor(slot / 8) * 192, 192, 192];
    return sprite(box, 'pet-painted-turnarounds.webp', 1536, 1728, fitted && !alignFeet);
  }
  function petView(id, facing, fitted, alignFeet = false) {
    if (id === 'maltese') {
      if (facing !== 'front') {
        if (fitted) return sprite(malteseFit[facing], 'pet-painted-angles.png', 1774, 887, !alignFeet);
        return '<svg viewBox="0 0 100 100" aria-hidden="true"><image href="pet-painted-maltese-'+facing+'.webp" width="100" height="100" preserveAspectRatio="xMidYMax meet"/></svg>';
      }
      return sprite(fitted ? frontFit.maltese : [174, 79, 879, 1054], 'welcome-puppy.png', 1254, 1254, fitted && !alignFeet);
    }
    if (facing !== 'front') return turnaroundSprite(turnaroundSlots.get(id)[facing], fitted, alignFeet);
    const extras = ['spottedCat', 'spottedDog', 'tuxDog', 'stripedDog'];
    const extra = extras.indexOf(id);
    return extra < 0 ? paintedPetPreset(id, fitted, alignFeet) : turnaroundSprite(64 + extra, fitted, alignFeet);
  }

  // A slight optical correction centers the body mass when a tail extends to one side.
  const petOpticalOffsets = {
    poodle: [[-0.4,-0.9],[-0.5,-1.2],[-0.3,0.6]],
    shiba: [[1.6,-1.4],[-2,-1.7],[-0.1,-0.2]],
    corgi: [[-0.4,-1],[0.2,-2.8],[0,0.3]],
    jindo: [[2.7,-2.1],[-1.8,-1.9],[-0.2,-0.4]],
    mix: [[-1.7,-0.4],[-1.3,-1.1],[-0.3,1.4]],
    d7: [[-0.4,-0.3],[-0.2,-1.1],[-0.6,0.9]],
    d8: [[0.4,-0.5],[-0.2,-1.2],[-0.6,1.6]],
    d12: [[-1,-0.3],[-1.1,-1.1],[-0.4,1.1]],
    cheese: [[1.8,-1.8],[0.7,-2.1],[-0.1,-0.6]],
    mackerel: [[2.3,-1.8],[0.3,-2.1],[0,-0.5]],
    russian: [[1.8,-1.8],[0.8,-2],[-0.2,-0.6]],
    calico: [[2,-1.8],[0.6,-1.9],[0.2,-0.8]],
    d9: [[-1.4,-0.7],[-0.5,-1.4],[-0.6,0.6]],
    d10: [[1.3,-1.3],[-1.5,-2.1],[0,-0.3]],
    d11: [[-0.9,-0.1],[1.8,-1.4],[-0.1,0.7]],
    d13: [[-0.9,-0.3],[-0.9,-1.2],[-0.8,0.5]],
    d15: [[1.9,-1.5],[1.4,-2.8],[0.1,-1.1]],
    d16: [[-1.4,0],[0.9,-1.4],[-0.5,0.8]],
    d17: [[1.4,-1.1],[1,-2.8],[-0.2,-0.7]],
    d18: [[-1.2,0.4],[1.2,-1.1],[-0.5,1.3]],
    d14: [[-1.2,-0.6],[-0.4,-1],[-1.1,0.8]],
    tuxedo: [[1.7,-1.8],[0.2,-2.1],[0.1,-0.6]],
    c6: [[2,-1.6],[0.8,-1.9],[0.1,-0.6]],
    c7: [[1.8,-1.7],[0.7,-1.9],[-0.1,-0.7]],
    c8: [[2,-0.6],[2.7,-2.3],[-0.9,-1]],
    c9: [[2.1,-1.6],[1.8,-2.8],[0.9,-1.8]],
    c10: [[1.8,-0.5],[1.7,-2.3],[0.4,-1]],
    c11: [[2.1,-1.6],[2.5,-2.8],[0.7,-1.8]],
    maltese: [[-0.9,-0.5],[1,-1],[-0.5,-0.5]]
  };
  const seatedPreviewPets = new Set("maltese poodle shiba corgi jindo mix d7 d8 d12 cheese mackerel russian calico d9 d10 d11 d13 d15 d16 d17 d18 d14 tuxedo c6 c7 c8 c9 c10 c11".split(" "));
  function fittedPet(id, facing) {
    if (facing !== 'front' && seatedPreviewPets.has(id)) {
      return '<image href="pet-seated/'+id+'-'+facing+'.webp" x="10" y="11.3" width="80" height="82" preserveAspectRatio="xMidYMax meet"/>';
    }
    const direction = petDirections.indexOf(facing);
    const [x] = petOpticalOffsets[id]?.[direction] || [0, 0];
    return '<svg x="'+(9+x)+'" y="'+11.3+'" width="82" height="82">'+petView(id,facing,true,true)+'</svg>';
  }

  const petDirections = ['front', 'side', 'back'];
  let coatId = 0;
  function coatColor(id, color, strength) {
    const channels = color.map(channel => channel / 255);
    const neutral = [0.94, 0.88, 0.8];
    const levels = [0, 0.2, 0.4, 0.6, 0.8, 1];
    return '<filter id="'+id+'" color-interpolation-filters="sRGB"><feComponentTransfer>'
      + ['R', 'G', 'B'].map((channel, index) => {
        const tint = (channels[index] - neutral[index]) * strength;
        const table = levels.map(value => Math.max(0, Math.min(1, value + tint * Math.pow(value, 1.35))).toFixed(3));
        return '<feFunc'+channel+' type="table" tableValues="'+table.join(' ')+'"/>';
      }).join('') + '</feComponentTransfer></filter>';
  }

  function customPet(look, facing, fitted) {
    const direction = Math.max(0, petDirections.indexOf(facing));
    const ears = look.sp === 'cat' ? ['up', 'fold'] : ['up', 'fold', 'drop', 'curly'];
    const slot = direction * 6 + (look.sp === 'cat' ? 4 : 0) + Math.max(0, ears.indexOf(look.ear));
    const box = fitted ? customFit[slot] : [slot % 6 * 192, direction * 192, 192, 192];
    return paintCoat(look, sprite(box, 'pet-painted-custom.webp', 1152, 576, fitted), fitted);
  }

  function paintCoat(look, art, fitted) {
    const id = 'pet-coat-' + ++coatId;
    const fur = /^#[0-9a-f]{6}$/i.test(look.fur) ? look.fur.slice(1) : 'fbf8f2';
    const color = fur.match(/../g).map(channel => parseInt(channel, 16));
    return '<defs>'+coatColor(id, color, 0.9)+'</defs>'
      + '<g filter="url(#'+id+')">'+(fitted?'<svg x="9" y="9" width="82" height="82">':'<svg x="5" y="5" width="90" height="90">')+art+'</svg></g>';
  }

  function sceneLandscape(id, windowView) {
    if (!windowView && id === 'jeju') {
      return '<image class="scene-landscape" href="bucket-painted-jeju-ground.webp" width="360" height="480"/>';
    }
    if (!windowView && id === 'drive') {
      return '<image class="scene-landscape" href="bucket-painted-coastal-drive.webp" x="0" width="1440" height="480"/>';
    }
    const room = windowView ? -1 : ['cake', 'bath', 'drive', 'window'].indexOf(id);
    if (room >= 0) {
      const x = room % 2 * 540, y = Math.floor(room / 2) * 720;
      return '<svg class="scene-landscape" width="360" height="480" viewBox="'+x+' '+y+' 540 720" style="overflow:hidden">'
        + '<image href="bucket-painted-rooms.webp" width="1080" height="1440"/></svg>';
    }
    const cell = covers.indexOf(id);
    const height = 1024 / 3, x = (cell % 4) * 384, y = Math.floor(cell / 4) * height;
    const left = id === 'jeju' ? 1 : 65;
    const box = windowView ? [x+1, y+1, 382, height*.73] : [x+left, y+1, 254.5, height-2];
    const position = windowView ? 'x="36" y="66" width="288" height="175"' : 'width="360" height="480"';
    const art = '<svg class="scene-landscape" '+position+' viewBox="'+box.join(' ')+'" preserveAspectRatio="xMidYMid slice" style="overflow:hidden">'
      + '<image href="bucket-painted-covers.png" width="1536" height="1024"/></svg>';
    return !windowView && id === 'jeju' ? '<g transform="translate(360 0) scale(-1 1)">'+art+'</g>' : art;
  }

  const scenePropBoxes = {
    car: [4,37,376,213], tub: [388,55,376,178],
    tangerine: [54,292,275,280], basket: [438,292,276,280]
  };
  function sceneProp(id) {
    const party = ['cake', 'firepit', 'biscuits', 'lantern'].indexOf(id);
    if (party >= 0) return sprite([party % 2 * 384, Math.floor(party / 2) * 288, 384, 288], 'bucket-painted-party-props.webp', 768, 576);
    return sprite(scenePropBoxes[id], 'bucket-painted-props.webp', 768, 576);
  }

  const motionGroups = [["poodle","shiba","corgi"],["jindo","mix","d7"],["d8","d12","d9"],["d10","d11","d13"],["d15","d16","d17"],["d18","d14","c6"],["cheese","mackerel","russian"],["calico","tuxedo","c7"],["c8","c9","c10"],["c11"]];
  const motionSlots = new Map();
  motionGroups.forEach((group, sheet) => {
    group.forEach((id, row) => motionSlots.set(id, {sheet, row, rows: group.length * 2}));
  });
  function motionFrame(id, frame, resting) {
    if (id === 'maltese') {
      if (resting) return sprite([frame * 192, 0, 192, 192], 'bucket-painted-puppy-rest.webp', 960, 192);
      return sprite([frame * 144, 0, 144, 144], 'bucket-painted-puppy-gait.webp', 576, 144);
    }
    const {sheet, row, rows} = motionSlots.get(id);
    return sprite([frame * 144, (row * 2 + Number(resting)) * 144, 144, 144],
      'bucket-painted-breed-'+sheet+'.webp', 576, rows * 144);
  }

  const eatingGroups = [["poodle","shiba","corgi","jindo"],["mix","d7","d8","d12"],["d9","d10","d11","d13"],["d15","d16","d17","d18"],["d14","cheese","mackerel","russian"],["calico","tuxedo","c6","c7"],["c8","c9","c10","c11"]];
  const eatingSlots = new Map([['maltese', {file: 'bucket-painted-puppy-eating.webp', row: 0, rows: 1}]]);
  eatingGroups.forEach((group, sheet) => {
    const file = 'bucket-painted-eating-'+sheet+'.webp';
    group.forEach((id, row) => eatingSlots.set(id, {file, row, rows: group.length}));
  });

  function eatingPet(id) {
    const slot = eatingSlots.get(id);
    if (!slot) return null;
    const {file, row, rows} = slot;
    return {
      file,
      frame(index) {
        return '<svg viewBox="0 0 100 100" aria-hidden="true"><svg x="5" y="5" width="90" height="90">'
          + sprite([index * 144, row * 144, 144, 144], file, 576, rows * 144)+'</svg></svg>';
      }
    };
  }

  function walkingPet(id) {
    if (id !== 'maltese' && !motionSlots.has(id)) return '';
    const frames = [0,1,2,3].map(frame =>
      '<g class="gait-frame" style="--frame-delay:'+(-((4 - frame) % 4) * .14)+'s">'
      + motionFrame(id, frame, false) + '</g>'
    ).join('');
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><svg x="5" y="5" width="90" height="90">'
      + frames + '</svg></svg>';
  }

  function bathAccent(id) {
    const index = ['foam','suds','towel','shower'].indexOf(id);
    return sprite([index % 2 * 256, Math.floor(index / 2) * 160, 256, 160], 'bucket-painted-bath-accents.webp', 512, 320);
  }

  function restingPet(look, pose, closeUp, preset) {
    const p = Math.max(0, Math.min(4, pose)), from = Math.floor(p), to = Math.ceil(p);
    function layer(index, opacity) {
      if (preset === 'maltese' || motionSlots.has(preset)) {
        const art = preset === 'maltese' ? motionFrame(preset, index, true)
          : index === 0 ? petView(preset, 'front') : motionFrame(preset, index - 1, true);
        return '<svg x="5" y="5" width="90" height="90" opacity="'+opacity+'">'+art+'</svg>';
      }
      const cat = look.sp === 'cat';
      const box = [index * 192, cat ? 192 : 0, 192, 192];
      const art = sprite(box, cat ? 'bucket-painted-rest.webp' : 'bucket-painted-puppy-rest.webp', 960, cat ? 384 : 192);
      return '<g opacity="'+opacity+'">'+paintCoat(look, art)+'</g>';
    }
    return '<svg viewBox="'+(closeUp ? '0 24 100 76' : '0 0 100 100')+'" preserveAspectRatio="xMidYMax meet" aria-hidden="true">'
      + layer(from, from === to ? 1 : to - p) + (from === to ? '' : layer(to, p - from)) + '</svg>';
  }

  const napGuardianSheet = 'bucket-painted-nap-pillow.webp';
  const napGuardianBoxes = [[0, 0, 320, 320], [320, 0, 320, 320]];

  window.StorybookArt = {
    sceneLandscape, sceneProp, restingPet, walkingPet, eatingPet, bathAccent,
    customPet,
    petView, fittedPet,
    memorial: (id) => sprite(memorial[id], 'memorial-painted-offerings.png', 1254, 1254),
    urn: (id) => sprite(urns[id] || urns.white, 'memorial-painted-urns.png', 1536, 1024),
    prop: (id) => sprite(keepsakes[id], 'memorial-painted-keepsakes.png', 1774, 887),
    cover: (id, heightFraction = 1) => {
      const index = covers.indexOf(id);
      const cellHeight = 1024 / 3;
      const x = (index % 4) * 384 + 1;
      const y = Math.floor(index / 4) * cellHeight + 1;
      return '<svg viewBox="'+x+' '+y+' 382 '+((cellHeight-2)*heightFraction)+'" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
        + '<image href="bucket-painted-covers.png" width="1536" height="1024"/></svg>';
    }
  };
  const guardianSheet = 'yard-painted-guardians.png';
  const reachSheet = 'bucket-painted-guardian-gestures.webp?v=trimmed';
  const reachBoxes = [[0,0,224,320], [224,0,224,320], [0,320,224,320], [224,320,224,320]];
  const reachAnchors = [[0.8973,0.5219,0.975],[0.9598,0.5312,0.975],[0.9598,0.6625,0.975],[0.9598,0.6906,0.975]];
  const reachFeet = [0.2991,0.3661,0.3348,0.375];
  const pickSheet = 'bucket-painted-guardian-picking.webp';
  const pickBoxes = [[0,0,224,320],[224,0,224,320]];
  const pickAnchors = [[.822,.141,.388,.975],[.879,.119,.447,.975]];

  const alternativeStyles = ['side-part', 'ponytail'];
  const alternativePoses = ['idle', 'reach', 'low', 'nap', 'pick'];
  const alternativeSheets = ['guardian-side-part.webp','guardian-ponytail.webp'];
  const alternativeAnchors = [
    {reach:[0.856,0.514,0.32,0.966],low:[0.908,0.647,0.368,0.966],pick:[0.824,0.141,0.387,0.966]},
    {reach:[0.891,0.517,0.358,0.966],low:[0.903,0.672,0.381,0.966],pick:[0.848,0.115,0.425,0.966]}
  ];

  const wardrobeStyles = ['hoodie','cardigan'];
  const wardrobeSlots = new Map();
  [[5,8,10,6,12],[1,9,11,7,13],[14,15,16,17,18],[19,20,21,22,23]].forEach((poses,style) => {
    poses.forEach((index,pose) => wardrobeSlots.set(index,{style,pose}));
  });
  const wardrobeFit = {
    knit: [
      {"eyes":[[0.3558,0.2864,0.6346,0.2864],[0.452,0.282,0.6,0.274],[0.49,0.379,0.626,0.371],[0.368,0.702,0.548,0.629],[0.471,0.226,0.587,0.202]]},
      {"eyes":[[0.3843,0.2819,0.6157,0.2819],[0.49,0.298,0.665,0.274],[0.458,0.427,0.652,0.395],[0.381,0.637,0.529,0.581],[0.49,0.226,0.606,0.185]]},
      {"eyes":[[0.4038,0.2969,0.601,0.2969],[0.445,0.29,0.587,0.274],[0.49,0.387,0.632,0.355],[0.406,0.798,0.574,0.661],[0.471,0.25,0.587,0.226]]},
      {"eyes":[[0.4183,0.3094,0.6154,0.3094],[0.477,0.274,0.632,0.266],[0.477,0.427,0.639,0.403],[0.4,0.613,0.568,0.508],[0.477,0.234,0.6,0.21]]}
    ],
    hoodie: [
      {"anchors":{"reach":[0.843,0.521,0.32,0.966],"low":[0.906,0.65,0.357,0.966],"pick":[0.824,0.143,0.393,0.966]},"eyes":[[0.3942,0.3156,0.5913,0.3156],[0.452,0.29,0.594,0.282],[0.49,0.371,0.626,0.363],[0.381,0.694,0.542,0.621],[0.471,0.226,0.587,0.202]]},
      {"anchors":{"reach":[0.906,0.529,0.386,0.966],"low":[0.902,0.678,0.395,0.966],"pick":[0.881,0.113,0.44,0.966]},"eyes":[[0.3942,0.3063,0.6058,0.3063],[0.503,0.298,0.652,0.274],[0.465,0.419,0.639,0.387],[0.381,0.645,0.523,0.565],[0.49,0.202,0.619,0.169]]},
      {"anchors":{"reach":[0.858,0.514,0.321,0.969],"low":[0.908,0.646,0.37,0.969],"pick":[0.828,0.135,0.39,0.969]},"eyes":[[0.4087,0.3,0.6058,0.3],[0.445,0.282,0.594,0.274],[0.484,0.379,0.639,0.355],[0.419,0.782,0.568,0.669],[0.471,0.25,0.594,0.226]]},
      {"anchors":{"reach":[0.894,0.517,0.357,0.969],"low":[0.905,0.672,0.387,0.966],"pick":[0.852,0.114,0.426,0.966]},"eyes":[[0.4183,0.3094,0.6154,0.3125],[0.477,0.274,0.619,0.258],[0.471,0.427,0.639,0.395],[0.394,0.621,0.555,0.5],[0.477,0.242,0.594,0.21]]}
    ],
    cardigan: [
      {"anchors":{"reach":[0.846,0.521,0.318,0.966],"low":[0.905,0.65,0.367,0.966],"pick":[0.824,0.145,0.392,0.966]},"eyes":[[0.3942,0.3156,0.5913,0.3156],[0.445,0.282,0.587,0.274],[0.49,0.371,0.626,0.363],[0.387,0.694,0.555,0.621],[0.471,0.226,0.587,0.202]]},
      {"anchors":{"reach":[0.906,0.53,0.389,0.966],"low":[0.906,0.682,0.395,0.966],"pick":[0.875,0.119,0.448,0.966]},"eyes":[[0.3942,0.3063,0.6058,0.3063],[0.497,0.298,0.652,0.282],[0.465,0.419,0.639,0.395],[0.374,0.645,0.523,0.556],[0.49,0.202,0.613,0.169]]},
      {"anchors":{"reach":[0.859,0.513,0.324,0.966],"low":[0.911,0.646,0.369,0.966],"pick":[0.824,0.142,0.386,0.969]},"eyes":[[0.4087,0.3,0.6058,0.3],[0.452,0.282,0.594,0.274],[0.484,0.379,0.645,0.363],[0.419,0.774,0.613,0.645],[0.477,0.25,0.594,0.226]]},
      {"anchors":{"reach":[0.889,0.519,0.355,0.969],"low":[0.905,0.672,0.387,0.966],"pick":[0.853,0.115,0.429,0.969]},"eyes":[[0.4183,0.3094,0.6154,0.3125],[0.477,0.274,0.619,0.258],[0.471,0.427,0.645,0.395],[0.406,0.613,0.587,0.5],[0.484,0.242,0.594,0.218]]}
    ]
  };

  function wardrobeName(outfit) {
    return wardrobeStyles.includes(outfit) ? outfit : 'knit';
  }

  function outfitPlacement(look, pose) {
    const slot = wardrobeSlots.get(guardianIndex(look,pose));
    return wardrobeFit[wardrobeName(look.outfit)]?.[slot.style]?.anchors?.[pose];
  }

  function alternativeStyle(look) {
    return alternativeStyles.indexOf(look.hairStyle);
  }

  function pickPlacement(look, x, y) {
    const style = alternativeStyle(look);
    const [handX,handY,footX,footY] = outfitPlacement(look,'pick') || (style < 0 ? pickAnchors[look.long ? 1 : 0] : alternativeAnchors[style].pick);
    const height = 154, width = height * 224 / 320;
    const left = x - width * handX, top = y - height * handY;
    return {x:left,y:top,width,height,footX:left+width*footX,footY:top+height*footY};
  }

  function reachPlacement(look, pose, x, y, floor, maxHeight = Infinity) {
    const low = pose === 'low';
    const index = (low ? 2 : 0) + Number(!!look.long);
    const style = alternativeStyle(look);
    const [handX,handY,footX,footY] = outfitPlacement(look,pose) || (style < 0
      ? [reachAnchors[index][0],reachAnchors[index][1],reachFeet[index],reachAnchors[index][2]]
      : alternativeAnchors[style][pose]);
    const idealHeight = (floor - y) / (footY - handY);
    const height = Math.min(maxHeight, Math.max(low ? 116 : 145, Math.min(low ? 152 : 188, idealHeight)));
    const width = height * 224 / 320;
    const left = x - width * handX, top = y - height * handY;
    return {x:left, y:top, width, height, footX:left + width * footX, footY:top + height * footY, pose};
  }

  const avatarDefaults = ['#3b2f2a', '#f6d7c3', '#f4b740', '#4f4b86'];
  const avatarParts = ['hair', 'skin', 'shirt', 'pants'];
  const guardianSources = new Map();
  const guardianVariants = new Map();
  const guardianSheets = new Map();

  function guardianPart(red, green, blue, x, y, longHair) {
    if (y > .95) return -1; // Shoes
    if (y > .70 && red < 160) return 3;
    if (y > .70 && (x < .30 || x > .71) && red > 180 && green - blue < 48) return 1;
    if (y < .43 && red > 155 && red - blue > 34 && green - blue > 12) return 1;
    if (y < .42 || (longHair && y < .62 && red < 151)) {
      if (y > .265 && y < .395 && x > .29 && x < .72) return -1; // Eyes and mouth
      return 0;
    }
    return 2;
  }

  function loadGuardianSheet(file) {
    return new Promise((resolve, reject) => {
      const sheet = new Image();
      sheet.onload = () => resolve(sheet);
      sheet.onerror = reject;
      sheet.src = file;
    });
  }
  function napGuardianPart(red, green, blue, x, y, longHair) {
    if (red < 150 && (y < .62 || (longHair && x < .37))) return 0;
    if (red > 168 && red - green > 14 && green - blue < 58) return 1;
    if (y > .65 && x > .65 && red - blue > 30) return 2;
    return -1;
  }
  function reachGuardianPart(red, green, blue, x, y, longHair) {
    if (y > .88 && red > blue + 5) return -1;
    if (y > .62 && blue > green && blue >= red - 10) return 3;
    const paleSkin = red > 156 && red - green > 13 && green - blue < 53;
    if (paleSkin && (y < .48 || x > .79 || (x < .38 && y > .56 && y < .76))) return 1;
    if (red < 152 && (y < .42 || (longHair && x < .32 && y < .58))) {
      return x > .38 && y > .22 ? -1 : 0;
    }
    return red - blue > 29 ? 2 : -1;
  }

  function alternativeGuardianPart(red, green, blue, x, y, longHair) {
    if (y > .93) return -1;
    if (red < 153 && (y < .45 || (longHair && y < .65 && x < .43))) return 0;
    if (red > 161 && red - green > 12 && green - blue < 49) return 1;
    if (y > .55 && blue >= red - 12 && red < 154) return 3;
    return red - blue > 32 ? 2 : -1;
  }

  function guardianAsset(index,outfit) {
    const slot = wardrobeSlots.get(index);
    if (slot && wardrobeStyles.includes(outfit)) {
      const {style,pose} = slot;
      const width = pose === 3 ? 320 : pose === 0 ? 208 : 224;
      const box = [pose % 2 * 320 + (320-width)/2,Math.floor(pose/2)*320,width,320];
      return {file:'guardian-'+outfit+'-'+style+'.webp',width:640,height:960,box,
        part:pose===3?napGuardianPart:pose===0?guardianPart:alternativeGuardianPart,longHair:style%2===1};
    }
    if (index >= 14) {
      const style = Math.floor((index - 14) / 5), pose = (index - 14) % 5;
      const width = pose === 3 ? 320 : pose === 0 ? 208 : 224;
      const x = pose % 2 * 320 + (320 - width) / 2;
      return {file:alternativeSheets[style], width:640, height:960, box:[x,Math.floor(pose / 2) * 320,width,320],
        part:pose === 3 ? napGuardianPart : pose === 0 ? guardianPart : alternativeGuardianPart, longHair:style === 1};
    }
    const longHair = index === 1 || (index >= 6 && index % 2 === 1);
    if (index >= 12) return {file:pickSheet,width:448,height:320,box:pickBoxes[index-12],part:reachGuardianPart,longHair};
    if (index >= 8) return {file:reachSheet,width:448,height:640,box:reachBoxes[index-8],part:reachGuardianPart,longHair};
    if (index >= 6) return {file:napGuardianSheet,width:640,height:320,box:napGuardianBoxes[index-6],part:napGuardianPart,longHair};
    return {file:guardianSheet,width:1536,height:1024,box:guardians[index],part:guardianPart,longHair};
  }

  function guardianSource(index,outfit) {
    const key = index+':'+outfit;
    if (!guardianSources.has(key)) {
      const {file, box, part, longHair} = guardianAsset(index,outfit);
      if (!guardianSheets.has(file)) guardianSheets.set(file,loadGuardianSheet(file));
      const ready = guardianSheets.get(file);
      guardianSources.set(key, ready.then(sheet => {
        const [x, y, width, height] = box;
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(width * 256 / height);
        canvas.height = 256;
        const context = canvas.getContext('2d', {willReadFrequently: true});
        context.drawImage(sheet, x, y, width, height, 0, 0, canvas.width, canvas.height);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
        const parts = new Int8Array(canvas.width * canvas.height).fill(-1);
        for (let i = 0; i < parts.length; i++) {
          const offset = i * 4;
          if (pixels.data[offset + 3] < 12) continue;
          const x = (i % canvas.width) / canvas.width;
          const y = Math.floor(i / canvas.width) / canvas.height;

          parts[i] = part(pixels.data[offset], pixels.data[offset + 1], pixels.data[offset + 2], x, y, longHair);
        }
        return {pixels, parts};
      }));
    }
    return guardianSources.get(key);
  }

  function drawRoundGlasses(context,eyes) {
    const [leftX,leftY,rightX,rightY] = eyes;
    const width = context.canvas.width, height = context.canvas.height;
    const dx=(rightX-leftX)*width,dy=(rightY-leftY)*height;
    const gap=Math.hypot(dx,dy),radius=gap*.39;
    context.save();
    context.translate((leftX+rightX)*width/2,(leftY+rightY)*height/2);
    context.rotate(Math.atan2(dy,dx));
    context.lineWidth=Math.max(1,gap*.067);
    context.strokeStyle='#69503b';
    context.fillStyle='#fff8db20';
    for(const sign of [-1,1]){
      context.beginPath();
      context.ellipse(sign*gap/2,0,radius,radius*.94,0,0,Math.PI*2);
      context.fill();
      context.stroke();
    }
    context.lineCap='round';
    context.beginPath();
    context.moveTo(-gap/2+radius,-.5);
    context.quadraticCurveTo(0,-radius*.25,gap/2-radius,-.5);
    context.moveTo(-gap/2-radius,-.5);
    context.lineTo(-gap/2-radius*1.35,-radius*.35);
    context.moveTo(gap/2+radius,-.5);
    context.lineTo(gap/2+radius*1.25,-radius*.35);
    context.stroke();
    context.restore();
  }

  function recoloredGuardian(index,palette,outfit='knit',glasses=false) {
    const key = index+':'+outfit+':'+glasses+':'+palette.join(',');
    if (!guardianVariants.has(key)) {
      if (guardianVariants.size >= 48) guardianVariants.delete(guardianVariants.keys().next().value);
      guardianVariants.set(key, guardianSource(index,outfit).then(({pixels, parts}) => {
        const targets = palette.map((color, part) => {
          if ((outfit==='knit' && index>=6 && index<14 || part<2) && color===avatarDefaults[part]) return null;
          if (outfit==='knit' && part===2 && index===5 && color===avatarDefaults[part]) return null;
          const rgb = color.slice(1).match(/../g).map(value => parseInt(value, 16));
          if (part === 0) return rgb.map((value, i) => value * .86 + [197, 177, 154][i] * .14);
          if (part === 1) return rgb.map((value, i) => value + [1, -7, -12][i]);
          return rgb.map((value, i) => value * .86 + [168, 148, 124][i] * .14);
        });
        const sourceLight = outfit!=='knit' ? [84,190,156,76] : index >= 8 ? [84, 190, 156, 76] : index >= 6 ? [88, 188, 148, 72] : [86, 210, index === 1 ? 182 : 176, 97];
        const canvas = document.createElement('canvas');
        canvas.width = pixels.width;
        canvas.height = pixels.height;
        const context = canvas.getContext('2d');
        const output = context.createImageData(pixels.width, pixels.height);
        output.data.set(pixels.data);
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          const target = targets[part];
          if (!target) continue;
          const offset = i * 4;
          const red = pixels.data[offset], green = pixels.data[offset + 1], blue = pixels.data[offset + 2];
          const light = red * .24 + green * .65 + blue * .11;
          const shade = light - sourceLight[part];
          output.data[offset] = target[0] + shade + (part === 1 ? (red - green - 42) * .18 : 0);
          output.data[offset + 1] = target[1] + shade;
          output.data[offset + 2] = target[2] + shade;
        }
        context.putImageData(output, 0, 0);
        const slot = wardrobeSlots.get(index);
        const eyes = slot && (wardrobeFit[outfit]?.[slot.style]?.eyes?.[slot.pose] || wardrobeFit.knit?.[slot.style]?.eyes?.[slot.pose]);
        if (glasses && eyes) drawRoundGlasses(context,eyes);
        return canvas.toDataURL('image/png');
      }));
    }
    return guardianVariants.get(key);
  }

  customElements.define('painted-guardian', class extends HTMLElement {
    connectedCallback() {
      const palette = this.dataset.palette.split(',');
      recoloredGuardian(Number(this.dataset.sprite),palette,wardrobeName(this.dataset.outfit),this.dataset.glasses==='true').then(source => {
        if (!this.isConnected) return;
        const image = new Image();
        image.alt = '';
        image.src = source;
        this.replaceChildren(image);
      }).catch(() => {
        // Keep the illustrated preview when canvas access is unavailable.
      });
    }
  });

  function guardianPalette(look) {
    return avatarParts.map((part, i) =>
      /^#[0-9a-f]{6}$/i.test(look[part]) ? look[part].toLowerCase() : avatarDefaults[i]
    );
  }
  function guardianIndex(look, pose) {
    const style = alternativeStyle(look);
    if (style >= 0) return 14 + style * 5 + Math.max(0,alternativePoses.indexOf(pose));
    const hair = look.long ? 1 : 0;
    if (pose === 'reach') return 8 + hair;
    if (pose === 'low') return 10 + hair;
    if (pose === 'pick') return 12 + hair;
    if (pose === 'nap') return 6 + hair;
    return look.long ? 1 : 5;
  }
  function guardianSprite(look, pose) {
    const {box,file,width,height} = guardianAsset(guardianIndex(look,pose),wardrobeName(look.outfit));
    return sprite(box,file,width,height);
  }
  function customGuardian(look, pose) {
    const index = guardianIndex(look, pose);
    return '<painted-guardian data-sprite="'+index+'" data-palette="'+guardianPalette(look).join(',')+'" data-outfit="'+wardrobeName(look.outfit)+'" data-glasses="'+(look.glasses===true)+'" aria-hidden="true">'
      + guardianSprite(look, pose) + '</painted-guardian>';
  }

  window.DreamGarden = {
    background: () => '<img class="dream-world" src="yard-painted-map.png" width="1200" height="1400" alt="">',
    structure: (id) => id === 'niche'
      ? sprite([862, 854, 365, 374], 'yard-painted-landmarks.png', 1254, 1254)
      : sprite(structures[id], 'yard-landmarks-storybook.webp', 1774, 887),
    guardian: (index) => sprite(guardians[index], guardianSheet, 1536, 1024),
    guardianImage: (look,pose) => recoloredGuardian(guardianIndex(look,pose),guardianPalette(look),wardrobeName(look.outfit),look.glasses===true),
    guardianSprite, reachPlacement, pickPlacement, customGuardian
  };
})();
