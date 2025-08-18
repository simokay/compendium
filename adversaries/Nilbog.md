---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Nilbog.webp
name: Nilbog
source: Custom
size: Small
type: Humanoid
alignment: Chaotic Evil
ac: 13
hp: 7
hit_dice: 2d6
speed: Walk 30 ft.
stats:
  - 8
  - 14
  - 10
  - 10
  - 8
  - 15
skillsaves:
  - stealth: 6
senses: Darkvision 60 ft., Passive Perception 9
languages: Common, Goblin
cr: 1
traits:
  - name: Innate Spellcasting
    desc: "The nilbog's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast somes spells, without  material components."
  - name: Nilbogism
    desc: "Any creature that attempts to damage the nilbog must first succeed on a DC 12 Charisma saving throw or be charmed until the end of the creature's next turn. A creature charmed in this way must use its action praising the nilbog. The nilbog can't regain hit points, including through magical healing, except through its Reversal of Fortune reaction."
  - name: Nimble Escape
  - desc: "The nilbog can take the Disengage or Hide action as a bonus action on each of its turns."
actions:
  - name: Fool's Scepter
    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."
    attack_bonus: 4
    damage_dice: 1d6
    damage_bonus: 2
  - name: Shortbow
    desc: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
    attack_bonus: 4
    damage_dice: 1d6
    damage_bonus: 2
reactions:
  - name: Reversal of Fortune
    desc: "In response to another creature dealing damage to the nilbog, the nilbog reduces the damage to 0 and regains 1d6 hit points."
spells:
  - "The nilbog's innate spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:"
  - At Will: "[[Mage Hand]], [[Tasha's Hideous Laughter]], [[Vicious Mockery]]"
  - 1/Day Each: "[[Confusion]]"
---





