---
layout: adversary.njk
navtitle: Adversaries
tags: adversary
image: https://simokay.github.io/compendium/img/tokens/Hydra.webp
name: Hydra
source: Monster Manual
type: monstrosity
size: Huge
alignment: Unaligned
ac: 15
hp: 172
hit_dice: 15d12 + 75
speed: walk 30, swim 30
senses: darkvision 60 ft., Passive Perception 16
cr: 8
stats:
  - 20
  - 12
  - 20
  - 2
  - 10
  - 7
skillsaves:
  - perception: 6
traits:
  - name: Hold Breath
    desc: "The hydra can hold its breath for 1 hour."
  - name: Multiple Heads
    desc: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.\n\nWhenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.\n\nAt the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way."
  - name: Reactive Heads
    desc: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks."
  - name: Wakeful
    desc: "While the hydra sleeps, at least one of its heads is awake."
actions:
  - name: Multiattack
    desc: "The hydra makes as many bite attacks as it has heads."
  - name: Bite
    desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. 10 (1d10 + 5) piercing damage."
---