const elementsOfCards = [
    { hero : 'slark',
      srcHero: 'images/images_cards/slark.jpg'
    },
    { hero : 'riki',
      srcHero: 'images/images_cards/riki.jpg'
    },
    { hero : 'pa',
      srcHero: 'images/images_cards/pa.jpg'
    },
    { hero : 'ember',
      srcHero: 'images/images_cards/ember.jpg'
    },
    { hero : 'lancer',
      srcHero: 'images/images_cards/lancer.jpg'
    },
    { hero : 'gyro',
      srcHero: 'images/images_cards/gyro.jpg'
    },
    { hero : 'necr',
      srcHero: 'images/images_cards/necr.jpg'
    },
    { hero : 'void',
      srcHero: 'images/images_cards/void.jpg'
    },
    { hero : 'slark',
      srcHero: 'images/images_cards/slark.jpg'
    },
    { hero : 'riki',
      srcHero: 'images/images_cards/riki.jpg'
    },
    { hero : 'pa',
      srcHero: 'images/images_cards/pa.jpg'
    },
    { hero : 'ember',
      srcHero: 'images/images_cards/ember.jpg'
    },
    { hero : 'lancer',
      srcHero: 'images/images_cards/lancer.jpg'
    },
    { hero : 'gyro',
      srcHero: 'images/images_cards/gyro.jpg'
    },
    { hero : 'necr',
      srcHero: 'images/images_cards/necr.jpg'
    },
    { hero : 'void',
      srcHero: 'images/images_cards/void.jpg'
    }
];

const srcBg = 'images/back/dota_back.svg';
let parrentCardBlock = document.querySelector('.main__cards');
let winnerPopup = document.querySelector('.winMessage');

createElementsOfCards();

let listCards = document.querySelectorAll('.main__card');
let activeCards = [];
let numbersOfCloseCards = 0;

setTimeout(showAllCards, 400);
setTimeout(hideAllCards, 2000);

parrentCardBlock.addEventListener('click', e => {
    const parrentTarget = e.target.parentNode;
    
    if (parrentTarget.classList.contains('main__card')) {
        parrentTarget.classList.add('active-card');
        activeCards.push(parrentTarget);
    }
    if (activeCards.length >= 2) {
        listCards.forEach(e => {
            e.style.cssText += 'pointer-events: none';
        });

        if(activeCards[0].getAttribute(["data-name"]) === activeCards[1].getAttribute(["data-name"]) && activeCards[0].getAttribute(["data-numbers"]) !== activeCards[1].getAttribute(["data-numbers"])) {
            setTimeout(hideTwoCards, 500, activeCards);
        } else {
            setTimeout(closeTwoCards, 500, activeCards);
        }
  
        if (numbersOfCloseCards === elementsOfCards.length / 2 - 1) {
            const buttonToContinue = document.querySelector('.click-to-continue');

            winnerPopup.classList.add('winMessage__active');

            buttonToContinue.addEventListener('click', () => {
              winnerPopup.classList.remove('winMessage__active');

              parrentCardBlock.innerHTML = "";
              createElementsOfCards();

              listCards = document.querySelectorAll('.main__card');
              parrentCardBlock = document.querySelector('.main__cards');
              winnerPopup = document.querySelector('.winMessage');
              numbersOfCloseCards = 0;
              
              setTimeout(showAllCards, 400);
              setTimeout(hideAllCards, 2000);
            })
        }
        activeCards = [];
    }
});

function hideTwoCards(cards) {
    cards.forEach(e => {
        e.style.opacity = "0";
        e.style.visibility = "hidden";
    });
    listCards.forEach(e => {
        e.style.cssText += 'pointer-events: auto';
    });
    numbersOfCloseCards ++;
}

function closeTwoCards(cards) {
    cards.forEach(e => {
        e.classList.remove('active-card');
    });
    listCards.forEach(e => {
      e.style.cssText += 'pointer-events: auto';
    });
}

function showAllCards() {
  listCards.forEach(item => {
    item.classList.add('active-card');
    item.style.opacity = "1";
    item.style.cssText = 'pointer-events: none';
  });
}

function hideAllCards() {
  listCards.forEach(item => {
    item.classList.remove('active-card');
    item.style.cssText += 'pointer-events: auto';
  });
}

function createElementsOfCards() {
    elementsOfCards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < (elementsOfCards.length); i ++) {
        parrentCardBlock.innerHTML += `
            <li class="main__card" data-name="${elementsOfCards[i].hero}" data-numbers="${i}">
                <img class="main__card-back" src="${srcBg}" alt="background_dota">
                <img class="main__card-front" src="${elementsOfCards[i].srcHero}" alt="${elementsOfCards[i].hero}">
            </li>
        `;
    }
}