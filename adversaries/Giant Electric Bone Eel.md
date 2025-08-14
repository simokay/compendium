---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Giant%20Electric%20Bone%20Eel.webp
name: Giant Electric Bone Eel
source: Custom
size: Medium
type: Undead
alignment: Chaotic Evil
ac: 14
hp: 68
hit_dice: 8d10 + 24
speed: Walk 10 ft., Swim 40 ft.
stats:
  - 14
  - 18
  - 16
  - 3
  - 10
  - 5
skillsaves:
  - persuasion: 4
damage_immunities: Lightning
senses: Darkvision 60 ft., Passive Perception 14
cr: "4"
traits:
  - name: Lightning Reflexes
    desc: "The eel has advantage on Dexterity saving throws against effects that it can see, such as traps and spells. To gain this benefit, the eel can’t be blinded, deafened, or incapacitated."
actions:
  - name: Multiattack
    desc: "The eel makes two bite attacks."
  - name: Bite
    desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage plus 3 (1d6) lightning damage."
    attack_bonus: 6
    damage_dice: 2d6
    damage_bonus: 4
  - name: "Electric Shock (Recharge 5-6)"
    desc: "The eel releases a burst of electricity in a 20-foot radius. Each other creature in that area must make a DC 12 Constitution saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one. A creature that fails the saving throw by 5 or more is also stunned until the end of its next turn."
  - name: Constrictive Pull
    desc: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage. Target must make a DC 14 strenght or dex saving throw or be pulled toward to eel."
    attack_bonus: 4
    damage_dice: 1d8
    damage_bonus: 2
---





