---
sidebar_position: 4
---

# Jungle Ruins

## Zone Read

:::tip Simple Read
The Exit is always in the same Orientation as Infested Barrens to Jungle Ruins and the Silverfist Bossfight is near the Exit.  
Due to Zone & Overworld Alignment Bugs, assume the Exit is opposite to Entrance at League Start!  
The other PoI are along the outer Edge of the Zone. Use the Brush Technique from Cemetery of the Eternals to find them
:::

:::warning Complex Zone Read
Due to having 11 Variants, all Variants being able to be mirrored AND the Zone not respecting overworld zone Connections, learning this Zone is currently not recommended beyond the Simple Rule.  
Once Overwolrd Orientation and Zone Exit align 100% of the Time the Graphs below apply with the exception of mirroring, which will be fixed in a future itteration.
Additional Layout Images will also be added in the future.
:::

Jungle Ruins has several Layouts that can be categorized. In total there are 11 Layouts, although not all have yet been discovered due to Town Orientation currently being forced. If the Town Orientation is diffrent from previous Leagues,
some rules might no longer apply.

There are 4 known North West Exit Layouts and 6 North East Exit Layouts. They can be further identified based on the Initial Zone Shape and Edges. The Starting Tile always has a Tip and a Wiggle Part along the Edge.
Depending which Side has the Tip we can further identify the Layout. The final identification is based on the following Terrain. Noticably the Venom Crypt Entrance has 2 to 3 Possible Spots for each Variant.

![Tip](./img/Jungle%20Ruins/StartOrientation.png)

The Graph is split into two for easier readability.  
Top Left Exit & Tip Left Edge

```mermaid
graph TD;

A[Move Up till you hit an Edge]-->|Split Path to the Right|B[Follow Upper split Path till Zone opens again]
B-->BA[Move Up to find Camp]
BA-->BB[Follow outer Edge till Exit CP]
BB-->BC[Follow outer Edge till Jungle Grave]
BC-->BD[Return to Exit CP and move down to find Silverfist]
BD-->BE[Crypt WP should been near Travel Path]
A-->|Single Path to the Right|C[Follow Outer Edge Left]
C-->|found Jungle Grave|CA[Follow outer Edge up to find other PoIs]
CA-->CB[Return to Silverfirst and find Exit on top]
CB-->|no Crypt WP|CC[Return to Entrance and follow Inner Edge Right]
C-->|found Camp|CCA[Follow Outer Edge to find Exit CP and Silver Fist]
CCA-->CCB[Follow Outer Edge down to find Jungle Graveyard]
A-->|forced to go Left|D[Follow the Edge Left to find Camp]
D-->DA[Follow Edge]
DA-->|reached Chokepoint|DB[Move directly across the open Area]
DB-->|reached opposite Edge|DC[Follow Edge downwards for Jungle Grave or upwards for Silverfirst and Exit]
DC-->DD[return to nearest checkpoint and indirectly follow opposite direction for last PoI]
A-->|found Silverfist|E[Move up to find Exit CP]
E-->EB[Follow outer Edge Left to find Jungel Grave]
EB-->EC[Return to Silverfist CP and move Up to find Camp]
EC-->|No Crypt WP|ED[Return to Entrance CP and follow Outer Edge Right to find Crypt]
```

Top Right Exit

```mermaid
graph TD;
A[Check Tip orientation]-->|Tip Left|B[Check Top-Left Corner near Entrance]
A-->|Tip Right|C[Check Left Edge of Entrance]
C-->|Entrance lowest Point in Zone|CA[Follow Outer Edge Left Up]
C-->|Zone extends Down left of Entrance|Cc[Followe Outer Edge Left to find all PoI]
Cc-->|found Grave and Camp|Cd[Continue to follow Edge Right to find Silverfist and Exit]
CA-->|found Camp|CAA[Continue to follow the Edge till Zone opens up again, then head Top Right to find Jungle Grave]
CAA-->CAB[Follow outer Edge Down to find Silverfist and Exit]
CA-->|long Corridor|CBA[Follow Corridor to check if Crypt in Top Corner]
CBA-->CBB[Follow next long Corridor to find Jungle Grave and Silverfist]
CBB-->CBC[Follow Outer Edge to find Exit, then continue follow Down to find Camp and last Crypt Spawn]
B-->|Square Starting Section but no Passage|BA[Follow Inner Edge]
BA-->|found Chokepoint|BAA[Move Up to find Silverfirst]
BAA-->BAB[Exit CP is Right of Silverfist]
BAB-->BAC[Follow Outer Edge up then Left to find Jungle Grave and Camp]
BAC-->|no Crpyt WP|BAD[Return to Exit CP and follow Outer Edge Down to find Crypt]
B-->|Passage|BB[Follow Outer Edge Right]
BB-->|found Chokepoint|BBA[Silverfist right at Chokepoint]
BBA-->BBB[Move Up from Silverfist to find Exit CP]
BBB-->BBC[Move Right of Silverfirst for Jungle Grave]
BBC-->BBD[Follow Outer Edge Up to find Camp]
BBD-->|No Crypt WP|BBE[Continue follow Outer Edge Left to find Crypt]
B-->|Direct forced Right|BC[Follow Outer Edge Left Upwards]
BC-->|found Grave and Camp|BD[follow Outer Edge down to find Silverfist and Exit]
BD-->|No Crypt WP|BE[Continue to follow Outer Edge to find Crypt]
```

## Layouts

### Variant Table Examples

|                                                                                            |                                                                                            |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| (Mirrored) Dead End Corner![Jungle Ruins](<./img/Jungle%20Ruins/Jungle%20Ruins%20(1).png>) | Open Path Right ![Jungle Ruins 2](<./img/Jungle%20Ruins/Jungle%20Ruins%20(2).png>)         |
| (Mirrored) Early Camp ![Jungle Ruins 3](<./img/Jungle%20Ruins/Jungle%20Ruins%20(3).png>)   | (Mirrored) Forced Right ![Jungle Ruins 4](<./img/Jungle%20Ruins/Jungle%20Ruins%20(5).png>) |
| Tunnel ![Jungle Ruins 6](<./img/Jungle%20Ruins/Jungle%20Ruins%20(6).png>)                  |

### Points of Interest

Mighty Silverfist - 2 Weapon Set and Passive Skill Points  
Jungle Grave - Rare Belt after quick Dialog  
Troubled Camp - White 'Chest' drops guranteed Rare Gloves and Weapon Vendor
