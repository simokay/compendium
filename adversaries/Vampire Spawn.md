---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Vampire%20Spawn.webp
name: Vampire Spawn
source: MM25
type: Undead
size: Medium
alignment: Neutral Evil
ac: 6
hp: 90
init: +3 (13)
hit_dice: 12d8 + 36
speed: walk 30 ft
senses: Darkvision 60 ft., Passive Perception 13
cr: 5
stats:
  - 16
  - 16
  - 16
  - 11
  - 10
  - 12
skillsaves:
  - perception: 3
  - stealth: 6
damage_resistances: Necrotic
languages: understands Common plus one other
traits:
  - name: Spider Climb.
    desc: The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check.
  - name: Vampire Weaknesses.
    desc: "1) The vampire can't enter a residence without an invitation from an occupant.\n2) The vampire takes 20 Acid damage if it ends its turn in running water.\n3) The vampire is destroyed if a weapon that deals Piercing damage is driven into the vampire's heart while the vampire has the Incapacitated condition.\n4) The vampire takes 20 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage on attack rolls and ability checks."
actions:
  - name: Multiattack
    desc: The vampire makes two Claw attacks and uses Bite.
  - name: Claw
    desc: "Melee Attack Roll: +6, reach 5 ft. Hit: 8 (2d4 + 3) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape DC 13) from one of two claws."
  - name: Bite
    desc: "Constitution Saving Throw: DC 14, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. Failure: 5 (1d4 + 3) Piercing damage plus 10 (3d6) Necrotic damage. The target's Hit Point maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit Points equal to that amount."
bonus_actions:
  - name: Deathless Agility
    desc: The vampire takes the Dash or Disengage action.
---
