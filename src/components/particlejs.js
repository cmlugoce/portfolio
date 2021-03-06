import React from 'react';
import Particles from 'react-particles-js';

import Wrapper from './wrapper';

function ParticlesBG(props) { 
  return (
    <Wrapper>
      <Particles params={{
         "particles": {
	        "number": {
	            "value": 250,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
          },
        
            "color": {
              "value": "#FFF"
            },
            "line_linked": {
                    "enable": true,
                    "distance": 150,
                    // "color": "#000",
                     "opacity": 0,
                    // "width": 0
                  },
	        "move": {
	            "direction": "random",
	            "speed": 0.5
	        },
	        "size": {
	            "value": 1.5
	        },
	        "opacity": {
             "value": 0.8,
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 1
	            }
	        }
	    },
	    "interactivity": {
            "detect_on": "canvas",
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            },"onhover": {
                        "enable": true,
                        "mode": "grab"
                      },
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
          }, 
          "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1,
                      "distance": 250,
                      "width": 3
                    }
                  }
	    },
	    "retina_detect": true
	
	}} 
      //   "particles": {
      //     "number": {
      //       "value": 100,
      //       "density": {
      //         "enable": true,
      //         "value_area": 900
      //       }
      //     },
      //     "color": {
      //       "value": "#FF9933"
      //     },
      //     "shape": {
      //       "type": "circle",
      //       "stroke": {
      //         "width": 0,
      //         "color": "red"
      //       },
      //       "polygon": {
      //         "nb_sides": 5
      //       },
      //       "image": {
      //         "src": "img/github.svg",
      //         "width": 100,
      //         "height": 100
      //       }
      //     },
      //     "opacity": {
      //       "value": 0.7,
      //       "random": false,
      //       "anim": {
      //         "enable": false,
      //         "speed": 1,
      //         "opacity_min": 0.1,
      //         "sync": false
      //       }
      //     },
      //     "size": {
      //       "value": 4,
      //       "random": true,
      //       "anim": {
      //         "enable": false,
      //         "speed": 40,
      //         "size_min": 0.1,
      //         "sync": false
      //       }
      //     },
      //     "line_linked": {
      //       "enable": false,
            // "distance": 150,
            // "color": "#000",
            // "opacity": 0,
            // "width": 0
      //     },
      //     "move": {
      //       "enable": true,
      //       "speed": 1.5,
      //       "direction": "none",
      //       "random": true,
      //       "straight": false,
      //       "out_mode": "out",
      //       "bounce": false,
      //       "attract": {
      //         "enable": false,
      //         "rotateX": 600,
      //         "rotateY": 1200
      //       }
      //     }
      //   },
      //   "interactivity": {
      //     //"detect_on": "canvas",
      //     "events": {
      //       "onhover": {
      //         "enable": true,
      //         "mode": "bubble"
      //       },
      //       "onclick": {
      //         "enable": true,
      //         "mode": "push"
      //       },
      //       "resize": true
      //     },
      //     "modes": {
      //       "grab": {
      //         "distance": 400,
      //         "line_linked": {
      //           "opacity": 1
      //         }
      //       },
      //       "bubble": {
      //         "distance": 400,
      //         "size": 0,
      //         "duration": 2,
      //         "opacity": 0,
      //         "speed": 3
      //       },
      //       "repulse": {
      //         "distance": 400,
      //         "duration": 4
      //       },
      //       "push": {
      //         "particles_nb": 4
      //       },
      //       "remove": {
      //         "particles_nb": 2
      //       }
      //     }
      //   },
      //   "retina_detect": true
      // }}
      />
    </Wrapper>
  );
}

export default ParticlesBG;