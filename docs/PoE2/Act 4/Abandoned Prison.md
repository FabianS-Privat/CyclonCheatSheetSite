---
sidebar_position: 10
---

# Abandoned Prison

## Zone Read

:::tip Simple Read
Follow the Outer Edge from the Ship Side of the Walkway.
:::

Abandonded Prison has 4 Layouts that can be determined based on the Position and orientation of specific Tiles.
Important is the Prison Gate Tile and the Forgotten Cells tile.

Each Layout has 2 subvariants where the Position of the Armoury and Chapel are swapped.

The Solution for reading the Zone was created by GuythatDies and the Images have been yoinked from Lailoken. The Graph below is adjusted for 100% Campaign Runs for League Start Purposes.

```mermaid
graph TD;
A[Follow Ship Edge till first Identifier]-->|Paralel Early Gate|EarlyGateP1
EarlyGateP1-->|Armoury in Pos1|EGP2A[Continue to follow outer Edge till Chapel]
EarlyGateP1-->|Chapel in Pos1|EGP2B[Follow inner Edge to find Exit]
EGP2A-->EGP2B
A-->|Forgotten Cells|EarlyCells1[Follow Outer Edge till Pos1]
EarlyCells1-->EC2A[Follow Inner Edge till Gate Tile]
EC2A-->|Armoury in Pos1|EC2B[Turn Left for chapel]
EC2B-->EC2C
EC2A-->|Chapel in Pos1|EC2C[Turn right then Follow outer Edge to find Exit]
A-->|Perpendicular Early Gate|EarlyGateNP1[Follow Outer Edge till Pos1]
EarlyGateNP1-->|Armoury in Pos1|EGNP2A[Continue to follow Outer Edge to find Chapel]
EGNP2A-->EGNP2A2[Head to opposite Corner to find Exit]
EarlyGateNP1-->|Chapel in Pos1|EGNP2B[Follow inner Edge till Forgotten Cells]
EGNP2B-->EGNP2B2[Head to Corner to find Exit]
A-->|Chapel or Armoury|LateGate1[Is Chapel?]
LateGate1-->|Armoury|LG1A[Follow Outer Edge opposite to Ship to find Chapel]
LG1A-->LG1A2[Return to the Courtyard ]
LateGate1-->|Chapel|LG1B[Follow Inner Edge ]
LG1A2-->LG1B
LG1B-->|Strongbox CP|LG1B2[Head to Corner for Exit]
```

## Layouts

### Variant Table Examples

|                                                                                                         |                                                                                                       |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Early Paralel Gate![Abandoned Prison 1](<./img/Abandonded%20Prison/Abandoned%20Prison%20(1).png>)       | Early Forgotten Cells ![Abandoned Prison 2](<./img/Abandonded%20Prison/Abandoned%20Prison%20(2).png>) |
| Early Perpendicular Gate![Abandoned Prison 3](<./img/Abandonded%20Prison/Abandoned%20Prison%20(3).png>) | Late Gate & Cell ![Abandoned Prison 4](<./img/Abandonded%20Prison/Abandoned%20Prison%20(4).png>)      |

### Points of Interest

Chapel - Permanent Buff 30% Increased Mana or Life Recovery from Flask  
Forgotten Cells - No Special Reward but required for Layout Identifying  
Armoury - Several 'Chests' of different Rarity dropping Weapons guarded by Rare Fallen Quartermaster  
Strongbox - Long Hallway with guranteed Strongbox
