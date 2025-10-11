---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Stone Golem.webp
name: Stone Golem
source: MM25
type: Construct
size: Large
alignment: Unaligned
ac: 18
hp: 220
init: 3 (13)
hit_dice: 21d10 + 105
speed: walk 30 ft
senses: Darkvision 120 ft., Passive Perception 10
cr: 10
stats:
  - 22
  - 9
  - 20
  - 3
  - 11
  - 1
damage_immunities: Poison, Psychic
condition_immunities: Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned
languages: understands Common and Draconic but can't speak
traits:
  - name: Immutable Form.
    desc: The golem can't shape-shift.
  - name: Magic Resistance.
    desc: The golem has Advantage on saving throws against spells and other magical effects.
actions:
  - name: Multiattack
    desc: The golem makes two attacks, using Slam or Force Bolt in any combination.
  - name: Slam.
    desc: "Melee Attack Roll: +10, reach 5 ft. Hit: 15 (2d8 + 6) Bludgeoning damage plus 9 (2d8) Force damage."
  - name: Force Bolt.
    desc: "Ranged Attack Roll: +9, range 120 ft. Hit: 22 (4d10) Force damage."
bonus_actions:
  - name: Slow (Recharge 5–6).
    desc: The golem casts the Slow spell, requiring no spell components and using Constitution as the spellcasting ability (spell save DC 17).
---
