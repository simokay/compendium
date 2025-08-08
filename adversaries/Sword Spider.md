---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Sword%20Spider.webp
name: Sword Spider
source: Custom
size: Large
type: Beast
alignment: Unaligned
ac: 16
hp: 45
hit_dice: 6d10 + 12
speed: Walk 30 ft., Climb 30 ft.
stats:
  - 16
  - 16
  - 14
  - 6
  - 12
  - 4
skillsaves:
  - stealth: 7
senses: Tremorsense 60 ft., Passive Perception 11
cr: 3
traits:
  - name: Spider Climb
    desc: The sword spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
  - name: Web Sense
    desc: While in contact with a web, the sword spider knows the exact location of any other creature in contact with the same web.
  - name: Web Walker
    desc: The sword spider ignores movement restrictions caused by webbing.
actions:
  - name: Multiattack
    desc: The sword spider makes one Bite attack and two Foreleg attacks.
  - name: Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and has the paralyzed condition while poisoned in this way."
    attack_bonus: 5
    damage_dice: 1d8
    damage_bonus: 3
  - name: Foreleg
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
---


