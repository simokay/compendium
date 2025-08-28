---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Demilich.webp
name: Demilich
source: Monster Manual
type: undead
size: Tiny
alignment: Neutral Evil
ac: 20
hp: 80
hit_dice: 32d4
speed: walk 0, fly 30, canHover true
senses: truesight 120 ft., Passive Perception 13

cr: 7
stats:
  - 1
  - 20
  - 10
  - 20
  - 17
  - 20
damage_vulnerabilities: 
damage_resistances: from magic weapons
damage_immunities: necrotic, poison, psychic, charmed, Deafened, exhaustion, frightened, paralyzed, petrified, poisioned, prone, stunned 
condition_immunities: charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone, stunned
saves:
  - constitution: 6
  - intelligence: 11
  - wisdom: 9
  - charisma: 11
traits:
  - name: Avoidance
    desc: "If the demilich is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
  - name: Legendary Resistance (3/Day)
    desc: "If the demilich fails a saving throw, it can choose to succeed instead."
  - name: Turn Immunity
    desc: "The demilich is immune to effects that turn undead."
actions:
  - name: Howl (recharge 5)
    desc: "The demilich emits a bloodcurdling howl. Each creature within 30 feet of the demilich that can hear the howl must succeed on a DC 15 Constitution saving throw or drop to 0 hit points. On a successful save, the creature is frightened until the end of its next turn."
  - name: Life Drain
    desc: "The demilich targets up to three creatures that it can see within 10 feet of it. Each target must succeed on a DC 19 Constitution saving throw or take 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total damage dealt to all targets."
legendary_actions:
  - name: Flight
    desc: "The demilich flies up to half its flying speed."
  - name: Cloud of Dust
    desc: "The demilich magically swirls its dusty remains. Each creature within 10 feet of the demilich, including around a corner, must succeed on a DC 15 Constitution saving throw or be blinded until the end of the demilich's next turn. A creature that succeeds on the saving throw is immune to this effect until the end of the demilich's next turn."
  - name: Energy Drain (Costs 2 Actions)
    desc: "Each creature with in 30 feet of the demilich must make a DC 15 Constitution saving throw. On a failed save, the creature's hit point maximum is magically reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this effect, the creature dies. A creature's hit point maximum can be restored with the  [[greater restoration]] spell or similar magic."
  - name: Vile Curse (Costs 3 Actions)
    desc: "The demilich targets one creature it can see within 30 feet of it. The target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until the curse ends, the target has disadvantage on attack rolls and saving throws. The target can repeat the saving throw at the end of each of its turns, ending the curse on a success."
---
