---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
name: Asteroid Spider
source: Custom
size: Gargantuan
type: Monstrosity
subtype: ""
alignment: Neutral Evil
ac: 17
hp: 348
hit_dice: 24d20 + 96
speed: 60 ft., Fly 60 ft. (hover)
stats:
  - 28
  - 10
  - 18
  - 17
  - 13
  - 12
skillsaves:
  - perception: 11
  - stealth: 5
senses: Blindsight 120 ft. while the spider's eyes are closed, Darkvision 120 ft., Passive Perception 21
languages: ""
cr: "15"
bestiary: true
traits:
  - name: False Appearance
    desc: If the spider is motionless, has its eyes and mouth closed, and has its legs wrapped around its body at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the spider move or act, that creature must succeed on a DC 18 Intelligence (Investigation) check to discern that the spider is anything other than an asteroid.
    attack_bonus: 0
  - name: Legendary Resistance (3/Day)
    desc: If the spider fails a saving throw, it can choose to succeed instead.
    attack_bonus: 0
  - name: Unusual Nature
    desc: The spider doesn't require air.
    attack_bonus: 0
actions:
  - name: Multiattack
    desc: The spider makes two Web Strand attacks, uses Reel, and makes two Bite attacks.
  - name: Bites
    desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one creature in the swarm's space. Hit: 21 (3d8+8) piercing damage plus 10 (3d6) acid damage."
    attack_bonus: 13
    damage_dice: 3d8 + 3d6
    attack_bonus: 8
  - name: Web Strand
    desc: "Ranged Weapon Attack: +13 to hit, reach 120 ft., one creature. Hit: The target is [[grappled]] (escape DC 18). The web strand can be attacked and destroyed (AC 12; 20 hit points; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage). The spider can grapple up to six creatures at a time using its web strands."
  - name: Reel
    desc: The spider pulls each creature [[grappled]] by it up to 60 feet straight toward itself.
---



