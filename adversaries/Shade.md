---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Shade.png
name: Shade
source: Custom
size: Huge
type: Dragon
subtype: ""
alignment: Lawful Evil
ac: 12
hp: 16
hit_dice: 3d8 + 3
speed: Walk 40 ft.
stats:
  - 6
  - 14
  - 13
  - 6
  - 10
  - 8
skillsaves:
  - stealth: 4
damage_vulnerabilities: Radiant
damage_resistances: Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from nonmagical attacks
damage_immunities: Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained
condition_immunities: Necrotic, Poison; 
senses: Darkvision 60 ft., Passive Perception 10
cr: "1/2"
traits:
  - name: Amorphous
    desc: The shadow can move through a space as narrow as 1 inch wide without squeezing.
  - name: Shadow Stealth
    desc: While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6.
  - name: Sunlight Weakness
    desc: While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws.
actions:
  - name: Strength Drain
    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\n\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
    attack_bonus: 4
    damage_dice: 2d6
    damage_bonus: 2
---
