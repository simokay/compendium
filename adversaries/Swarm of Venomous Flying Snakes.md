---
layout: adversary.njk
title: Swarm of Venomous Snakes
navtitle: Adversaries
tags:
  - adversary
name: Swarm of Venomous Flying Snakes
source: Custom
size: Medium
type: swarm of Tiny beasts
subtype: ""
alignment: unaligned
ac: 14
hp: 36
hit_dice: 10d8
speed: 30 ft., fly 60 ft., swim 30 ft.
stats:
  - 8
  - 18
  - 11
  - 1
  - 10
  - 3
damage_vulnerabilities: ""
damage_resistances: bludgeoning, piercing, slashing
damage_immunities: ""
condition_immunities: charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned
senses: blindsight 10 ft., passive Perception 10
languages: ""
cr: "2"
bestiary: true
traits:
  - name: Swarm
    desc: The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points.
    attack_bonus: 0
  - name: Flyby
    desc: The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.
    attack_bonus: 0
actions:
  - name: Bites
    desc: "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
    attack_bonus: 6
    damage_dice: 2d6
---