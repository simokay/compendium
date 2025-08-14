---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Shadow%20Demon.webp
name: Shadow Demon
source: Custom
size: Medium
type: Fiend
subtype: Demon
alignment: Chaotic Evil
ac: 14
hp: 66
hit_dice: 12d8 + 12
speed: 30 ft., Fly 30 ft. (hover)
stats:
  - 1
  - 17
  - 12
  - 14
  - 13
  - 14
skillsaves:
  - stealth: 7
damage_vulnerabilities: Radiant
damage_resistances: Acid, Bludgeoning, Cold, Fire, Lightning, Piercing, Slashing, Thunder
damage_immunities: Necrotic, Poison
condition_immunities: Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained
senses: Darkvision 120 ft., Passive Perception 11
languages: Abyssal; telepathy 120 ft.
cr: 4
traits:
  - name: Demonic Restoration
    desc: If the demon dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit Points somewhere in the Abyss.
  - name: Incorporeal Movement
    desc: The demon can move through other creatures and objects as if they were Difficult Terrain. It takes 5 (1d10) Force damage if it ends its turn inside an object.
  - name: Light Sensitivity
    desc: While in Bright Light, the demon has Disadvantage on ability checks and attack rolls.
actions:
  - name: Umbral Claw
    desc: "Melee Attack Roll: +5, reach 5 ft. Hit: 16 (3d8 + 3) Psychic damage."
    attack_bonus: 5
    damage_dice: 3d8
    damage_bonus: 3
bonus_actions:
  - name: Shadow Stealth
    desc: While in Dim Light or Darkness, the demon takes the Hide action.
---