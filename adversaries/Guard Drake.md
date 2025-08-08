---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Guard%20Drake.png
name: Guard Drake
source: Custom
size: Medium
type: Dragon
alignment: Unaligned
ac: 14
hp: 52
hit_dice: 7d8 + 21
speed: Walk 30 ft.
stats:
  - 16
  - 11
  - 16
  - 4
  - 10
  - 7
skillsaves:
  - perception: 2
senses: Darkvision 60 ft., Passive Perception 12
languages: Understands Draconic but can't speak
cr: 2
actions:
  - name: Multiattack
    desc: "The guard drake makes one Bite attack and one Tail attack."
  - name: Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage."
    attack_bonus: 5
    damage_dice: 1d8
    damage_bonus: 3
  - name: Tail
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
    attack_bonus: 5
    damage_dice: 1d6
    damage_bonus: 3
---
