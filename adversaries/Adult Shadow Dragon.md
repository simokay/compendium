---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Adult%20Shadow%20Dragon.webp
name: Adult Shadow Dragon
source: Custom
size: Huge
type: Dragon
subtype: ""
alignment: Chaotic Evil
ac: 16
hp: 189
hit_dice: 18d12 + 72
speed: Walk 40 ft., Fly 80 ft., Climb 40 ft.
stats:
  - 21
  - 19
  - 18
  - 14
  - 12
  - 18
skillsaves:
  - perception: 11
  - stealth: 14
damage_immunities: Necrotic
senses: Blindsight 30 ft., Darkvision 120 ft., Passive Perception 21
languages: Common, Draconic
cr: 13
traits:
  - name: Legendary Resistance (3/Day, or 4/Day in Lair)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
  - name: Living Shadow
    desc: While in Dim Light or Darkness, the dragon has Resistance to damage that isn't Force, Psychic, or Radiant.
  - name: Sunlight Sensitivity
    desc: While in sunlight, the dragon has Disadvantage on ability checks and attack rolls.
actions:
  - name: Multiattack.
    desc: The dragon makes three Rend attacks.
  - name: Rend
    desc: "Melee Attack Roll: +10, reach 10 ft. Hit: 12 (2d6 + 5) Slashing damage plus 3 (1d6) Necrotic damage."
    attack_bonus: 10
    damage_dice: 2d6 + 1d6
    damage_bonus: 7
  - name: Shadow Breath (Recharge 5–6)
    desc: "Dexterity Saving Throw: DC 17, each creature in a 60-foot Cone. Failure: 35 (10d6) Necrotic damage. Success: Half damage. Failure or Success: A Humanoid reduced to 0 Hit Points by this damage dies, and a Shadow rises from the corpse. The shadow is under the dragon's control and shares the dragon's Initiative count but acts immediately after the dragon."
bonus_actions:
  - name: Shadow Stealth. 
    desc: While in Dim Light or Darkness, the dragon takes the Hide action.
legendary_description: "Legendary Action Uses: 3 (4 in Lair). Immediately after another creature's turn, The shadow dragon can expend a use to take one of the following actions. The shadow dragon regains all expended uses at the start of each of its turns."
legendary_actions:
  - name: Pounce. 
    desc: The dragon moves up to half its Speed, and it makes one Rend attack.
  - name: Veil of Shadow
    desc: The dragon uses Shadow Stealth, and one creature of its choice that it can see within 10 feet of it takes 10 (3d6) Necrotic damage. The dragon can't take this action again until the start of its next turn.
regional_effects:
  - name: Negative Energy Suffusion
    desc: Whenever a creature within 1 mile of the lair regains Hit Points from a spell, it subtracts 1d10 from the number of Hit Points regained.
  - name: Stifling Shadows
    desc: Within 1 mile of the lair, effects that normally create Bright Light instead create Dim Light, and creatures there have Advantage on Dexterity (Stealth) checks.
---

