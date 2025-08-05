---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Chuul.webp
name: Chuul
source: MM 2014
size: Large
type: Aberration
subtype: ""
alignment: chaotic evil
ac: 16
hp: 93
hit_dice: 11d10 + 33
speed: 30 ft., climb 30 ft.
stats:
  - 19
  - 10
  - 16
  - 5
  - 11
  - 5
skillsaves:
  - perception: 4
damage_vulnerabilities: ""
damage_resistances: ""
damage_immunities: Poison
condition_immunities: Poisoned
senses: Darkvision 60 ft., Passive Perception 14
languages: Understands Deep Speech but can't speak
cr: 4
bestiary: true
traits:
  - name: Amphibious
    desc: The chuul can breathe air and water.
  - name: Sense Magic
    desc: The chuul senses magic within 120 feet of it at will. This trait otherwise works like the Detect Magic spell but isn't itself magical.
actions:
  - name: Multiattack
    desc: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
    attack_bonus: 0
  - name: Pincer
    desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is Grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures Grappled."
    attack_bonus: 6
    damage_dice: 2d6
    damage_bonus: 4
  - name: Tentacles
    desc: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."

---
