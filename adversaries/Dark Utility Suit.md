---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Dark%20Utility%20Suit.webp
name: Dark Utility Suit
source: Custom
size: Medium
type: Construct
alignment: Neutral
ac: 17
hp: 101
speed: 20 ft.
stats:
  - 24
  - 9
  - 20
  - 16
  - 8
  - 10
damage_vulnerabilities: Lightning
damage_resistances: Fire
condition_immunities: Poisoned, Stunned
senses: Passive Perception 9
traits:
  - name: Delicate Cogs.
    desc: The suit runs on a set of 4 rare magical cogs, if the suit takes more than 20 points of damage in a single attack, it must make a CON save DC 14. If it fails a cog is destroyed and cannot be repaired. the suit is inoperable until all cogs are present.
  - name: Heavy Frame.
    desc: The suit is considered very heavy and the wearer may have difficulty moving through various terrains, at the GMs discretion.
  - name: Unkillable
    desc: When the suit reaches 0 HP it is disabled and cannot be used again until repaired. The suit can be destroyed by recieving doubling the amount of damage.
  - name: Partial Repairs
    desc: When repairing the suit 10 hp is equivalent to 1 break in the armour
actions:
  - name: Smash
    desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
    attack_bonus: 1
    damage_dice: 2d8
    bonus_damage: 4

---



- has the appearance of a mechanical Minotaur.
- has a tough exterior that looks like it is made from a dark metal
- 4 [[Magical Cogs]] spin within the suit
