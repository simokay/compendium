---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Nightwalker.webp
name: Nightwalker
source: Custom
size: Huge
type: Undead
alignment: Chaotic Evil
ac: 14
hp: 337
hit_dice: 25d12 + 175
speed: 40 ft., Fly 40 ft.
stats:
  - 22
  - 19
  - 24
  - 6
  - 9
  - 8
skillsaves:
  - deception: 8
  - insight: 7
  - persuasion: 8
  - perception: 12
  - stealth: 6
damage_resistances: Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from nonmagical attacks
damage_immunities: Necrotic, Poison
condition_immunities: Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained
senses: Darkvision 120 ft., Passive Perception 9
cr: 20
traits:
  - name: Annihilating Aura
    desc: Any creature that starts its turn within 30 feet of the nightwalker must succeed on a DC 21 Constitution saving throw or take 21 (6d6) necrotic damage. Undead are immune to this aura.
  - name: Life Eater
    desc: A creature dies if reduced to 0 hit points by the nightwalker and can't be revived except by a wish spell.
  - name: Unusual Nature
    desc: The nightwalker doesn't require air, food, drink, or sleep.
actions:
  - name: Multiattack
    desc: The nightwalker makes two Enervating Focus attacks, one of which can be replaced by Finger of Doom, if available.
  - name: Enervating Focus
    desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 28 (5d8 + 6) necrotic damage. The target must succeed on a DC 21 Constitution saving throw or its hit point maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0."
    attack_bonus: 12
    damage_dice: 5d8
    damage_bonus: 6
  - name: Finger of Doom (Recharge 6)
    desc: The nightwalker points at one creature it can see within 300 feet of it. The target must succeed on a DC 21 Wisdom saving throw or take 39 (6d12) necrotic damage and become frightened until the end of the nightwalker's next turn. While frightened in this way, the creature is also paralyzed. If a target's saving throw is successful, the target is immune to the nightwalker's Finger of Doom for the next 24 hours.
---

