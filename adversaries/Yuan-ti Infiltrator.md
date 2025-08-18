---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Yuan-ti%20Infiltrator.webp
name: Yuan-ti Infiltrator
source: Custom
size: Medium
type: Monstrosity
alignment: Neutral Evil
ac: 11
hp: 40
hit_dice: 9d8
speed: Walk 40 ft., Fly 80 ft., Swim 40 ft.
stats:
  - 11
  - 12
  - 11
  - 13
  - 14
  - 12
skillsaves:
  - deception: 5
  - perception: 4
  - stealth: 3
damage_immunities: Poison
condition_immunities: Poisoned
senses: Darkvision 60 ft., Passive Perception 14
languages: Abyssal, Common, Draconic
cr: 1
traits:
  - name: Magic Resistance
    desc: The yuan-ti has Advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    desc: The yuan-ti makes two Scimitar attacks.
  - name: Scimitar
    desc: "Melee Attack Roll: +3, reach 5 ft. Hit: 4 (1d6 + 1) Slashing damage."
    attack_bonus: 3
    damage_dce: 1d6
    damage_bonus: 1
  - name: Poison Ray
    desc: "Ranged Attack Roll: +4, range 120 ft. Hit: 9 (2d6 + 2) Poison damage."
    attack_bonus: 4
    damage_dice: 2d6
    damage_bonus: 2
spells:
  - "The yuan-ti casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 12):"
  - At Will: "[[Animal Friendship]] (snakes only)"
  - 2/Day Each: "[[Suggestion]]"
---

