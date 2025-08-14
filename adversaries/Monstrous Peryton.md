---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Monstrous%20Peryton.webp
name: Monstrous Peryton
source: GoS
size: Large
type: Monstrosity
subtype: 
alignment: Chaotic Evil
ac: 14
hp: 144
hit_dice: 17d10 + 51
speed: Walk 20 ft., Fly 60 ft.,
stats:
  - 19
  - 14
  - 16
  - 9
  - 14
  - 10
skillsaves:
  - perception: 6
senses: Darkvision 60 ft., Passive Perception 16
languages: Understands Common and Elvish but can't speak
cr: 11
traits:
  - name: Flyby
    desc: The peryton doesn't provoke opportunity attacks when it flies out of an enemy's reach.
  - name: Keen Sight and Smell
    desc: The peryton has advantage on Wisdom (Perception) checks that rely on sight or smell
  - name: Legendary Resistance (3/Day)
    desc: If the peryton fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    desc: "The peryton makes two attacks: one with its gore and one with its talons."
  - name: Gore
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage."
    attack_bonus: 9
    damage_dice: 2d6
    damage_bonus: 5
  - name: Talons
    desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) slashing damage."
    attack_bonus: 9
    damage_dice: 2d10
    damage_bonus: 5
  - name: Curse Screech.
    desc: "The peryton chooses up to three creatures within 60 feet of it that it can see. Each creature must succeed on a DC 14 Wisdom saving throw or become cursed. While cursed, whenever the creature makes an attack roll, an ability check, or a saving throw, it must roll a d4 and subtract that number from the roll. A cursed creature can repeat this saving throw at the end of each of its turns, ending the effect on itself with a success. A creature that succeeds on this saving throw is immune to this peryton's Screech for 24 hours."
legendary_description: "Legendary Action Uses: 3. Immediately after another creature's turn, The monstrous peryton can expend a use to take one of the following actions. The monstrous peryton regains all expended uses at the start of each of its turns."
legendary_actions:
  - name: Talons Attack
    desc: The peryton makes one attack with its talons.
  - name: Dive Attack (Costs 2 Actions)
    desc: The peryton moves up to its speed toward one target of its choosing. It then makes a gore attack that deals an extra 9 (2d8) piercing damage on a hit.
---


