---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Dread%20Wolf.png
name: Dread Wolf
source: Custom
size: Medium
type: Humanoid
subtype: ""
alignment: Chaotic Evil
ac: 11
hp: 73
hit_dice: 10d10 + 20
speed: Walk 40 ft.
stats:
  - 18
  - 14
  - 18
  - 8
  - 7
  - 8
skillsaves:
  - perception: 5
damage_vulnerabilities: Radiant
damage_immunities: Bludgeoning, Piercing, and Slashing from nonmagical attacks that aren't silvered
condition_immunities: Poisoned
senses: Darkvision 60 ft., Passive Perception 14
languages: Can understand common but cannot speak
cr: 6
traits:
  - name: Keen Hearing and Smell
    desc: The creature has advantage on Wisdom (Perception) checks that rely on hearing or smell.
  - name: Undead Fortitude
    desc: If damage reduces the snake to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the snake drops to 1 hit point instead.
actions:
  - name: Multiattack
    desc: "The creature makes two attacks: one with its bite and one or more with its claws."
  - name: Death Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 5) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or take an addition 2d8 necrotic damage."
    attack_bonus: 5
    damage_dice: 1d8
    damage_bonus: 5
  - name: Claw
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (2d6 + 6) slashing damage."
    attack_bonus: 5
    damage_dice: 2d6
    damage_bonus: 6
---
