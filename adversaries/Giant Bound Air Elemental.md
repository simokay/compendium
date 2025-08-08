---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Giant%20Air%20Elemental.png
name: Giant Bound Air Elemental
source: Custom
size: Huge
type: Elemental
alignment: Neutral
ac: 14
hp: 127
hit_dice: 15d12 + 30
speed: 0 ft.
stats:
  - 10
  - 10
  - 14
  - 6
  - 10
  - 6
damage_resistances: lightning, thunder; damage from nonmagical weapons
damage_immunities: poison
condition_immunities: fatigue, grappled, paralyzed, petrified, poisoned, prone , restrained, stunned, unconscious
senses: darkvision 60 ft., passive Perception 10
languages: Auran
cr: "9"
traits:
  - name: Air Form
    desc: "The elemental can enter and end its turn in other creatures’ spaces and pass through an opening as narrow as 1 inch wide without squeezing."
  - name: Elemental Nature
    desc: An elemental doesn’t require air, sustenance, or sleep.
actions:
  - name: Slam
    desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 24 (6d6 + 4) bludgeoning damage."
    attack_bonus: 7
    damage_dice: 6d6
    damage_bonus: 4
  - name: "Whirlwind (Recharge 2–3)"
    desc: "The elemental takes the form of a whirlwind. When a creature shares its space with the whirlwind for the first time during this movement, that creature makes a DC 15 Strength saving throw . On a failure, the creature is carried inside the elemental’s space until the whirlwind ends, taking 3 (1d6) bludgeoning damage for each 10 feet it is carried, and falls prone at the end of the movement. The whirlwind can carry one Large creature or up to four Medium or smaller creatures."
  - name: Summon Dust Mephit
    desc: As an action the air elemental can summon a Dust Mephit
---
