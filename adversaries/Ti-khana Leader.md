---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Ti-khana%20Leader.webp
name: Ti-khana Leader
source: Custom
size: Medium
type: beast
alignment: chaotic evil
ac: 14 (natural armor)
hp: 49
hit_dice: 8d8+16
speed: 40 ft.
stats:
  - 16
  - 18
  - 16
  - 2
  - 12
  - 5
skillsaves:
  - stealth: 4
  - perception: 3
damage_resistances: "poison"
condition_immunities: "poisoned"
senses: passive Perception 13
cr: 2
traits:
  - name: Pounce.
    desc: "If the velociraptor leaps at least 20 feet straight toward a creature and then hits it with a rake attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the velociraptor can also make one bite attack against it as a bonus action."
  - name: Stalking Nature.
    desc: Velociraptors have advantage on Stealth (Dexterity) checks.
actions:
  - name: Multiattack.
    desc: "The deinonychus makes three attacks: one with its bite and two with its claws."
  - name: Claw
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8+3) slashing damage."
    attack_bonus: 5
    damage_dice: 2d8+3
  - name: Bite
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8+3) piercing damage. 3 (1d5+3) poison damage. DC 13 Constitution saving throw or become poisoned"
spells:
  - "The Ti-khana has been magically enhanced by the yuan-ti. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has following spells prepared:"
  - At Will: "[[Detect Poison]], [[Poison Spray]]"
  - 1/Day Each: "[[Shapechange]]"
---
