---
sidebar_position: 6
---

# Red Vale

## Zone Read

:::tip Simple Read
Cover the Map in a Spiral try to barely uncover the Edges of the Zone, keep an eye out for Red Veins in the Ground or Checkpoints to spot Obelisks.
:::

Red Vale has 8 Layout Variants that can be mirrored across the X or Y Axis resulting in a total of 32 Variations of the Zone.
When describing the Orientation keep in mind that the Zone can be rotated, so vague Terms have to be used.
Zone inwards means the direction to the Edge opposite the Entrance, Zone outwards means the Direction of the Edge adjacent Exit.

The 8 Variants are:

- Croche
  - Character is facing Bottom
  - WP is below starting Path
  - Tip opposite to WP looks like a Chrochehook
- Heart
  - Character is facing Bottom
  - WP is above Starting Path
  - Starting Section looks Heartlike / opens to smaller open Section then another Tunnel before Zoon actualy opens up
- Forced Path
  - Long Tunnel at Entrance before zone opens
  - Similar to Croche but has a small open Section before 2nd Tunnel
  - Checkpoint 1 is forced onto player
- Hook
  - Hook shaped Wall behind Waypoint
  - Character is facing Bottom
- Bump
  - No Forced Path & No Hook
  - Character is facing Bottom
  - Bump in the Wall opposite of Waypoint
- Vertical Bowtie or Bowtie open
  - Wall Opposite checkpoint is Bow-Tie / W Shaped
  - Character facing Bottom
  - Zone behind Checkpoint is open
- Bowtie blocked
  - Wall Opposite checkpoint is Bow-Tie Shaped
  - Character facing Bottom
  - Wall behind Checkpoint
- No Tells
  - Facing Bottom
  - No Key Tells

:::info Cyclon's Notes
I highly recommend comparing the written Instructions of the Flowchart with the visual Instructions of the Layout Examples! They make a lot more sense visualised.  
This is the 2nd best Zone to learn in Act 1. It is a complicated Zone with many variations, but the difference in time spend in Red Vale is insane between learned and not.
:::

For better readability I have split the Graph in 2. Recommended to Zoom in with 'Ctrl+ Mousewheel Up'

```mermaid
graph TD;
A[Check Entrance for Zone Identifier]
A-->|Hook|Hook1[Follow Hook Edge to find first Checkpoint & Obelisk]
Hook1-->Hook2[Opposite to Checkpoint is a Bridge, from Bridge move diagonaly away from the Wall Zone Iiwards to find Obelisk 2]
Hook2-->Hook3[Obelisk 3 is Parlale to Waypoint near a 2nd Bridge, follow the Wall next to Checkpoint 2 Zone Outwards]

A-->|Bump|Bump1[Follow Bumb Edge to find a Bridge follow inner Wall after crossing Bridge to find Checkpoint & Obelisk 1]
Bump1-->Bump2[Obelisk 2 is in a Alcove at the opposite Wall of Obelisk 1]
Bump2-->Bump3[And Obelisk 3 is at the opposite Edge of the Entrance]

A-->|Bowtie Open|BTO1[Imagine a Projectile being launched from the Bowtie. It accelerates Zone Inwards but it's velocity will decrease and it will 'fall'. Follow the Projectile Path to find Obelisk 1 near the Entrance]
BTO1-->BTO2[Obelisk 2 is in the middle of the Projectile Path]
BTO2-->|Obelisk 3 at end of Projectile Path|BTO31[Continue to follow the Path till you reach the Edge of the Zone]
BTO2-->|Obelisk 3 not at the end|BTO32[Follow the Edge in direction of the Entrance to find Obelisk 3 after a Bridge near a 2nd Bridge]

A-->|Bowtie blocked|BTB1[Follow the Bowtie Zone Inwards paralel to the Waypoint]
BTB1-->|Obelisk 1 near Entrance|BTB11[continue in that paralel to find a Bridge]
BTB1-->|No Obelisk 1 near Entrance, found Bridge|BTB12[cross the Bridge]
BTB11-->BTB2[Move opposite to Waypoint Edge to find Obelisk 2]
BTB12-->BTB2
BTB2-->BTB3[Travel the 2nd Island in the Center till you reach the Entrance Edge, Obelisk 1 if not found yet and Obelisk 3 will be on that Path]
```

```mermaid
graph TD;
A-->|Heart|FWA1[Move straight down from the Funnel till you find Obelisk 1]
FWA1-->FWA2[Paralel to Waypoint is a bridge, move top left to find the Bridge. Obelisk 2 is next to it]
FWA2-->FWA3[Obelisk 3 can be found in a straigth Line to the opposite Edge from Obelisk 2]

A-->|Croche|FWB1[Follow Tunnel Straigth, Obelisk 1 is in a Alcove at the inner Wall of the Zone]
FWB1-->FWB2[return back to Entrance along the inner Wall to find a Bridge, paralel to Obelisk 1 at the opposite Edge of the Bridge is Obelisk 2]
FWB2-->FWB3[Center of the imaginary Line between Obelisk 1 and Obelisk 2, near the Bridge downwards to find Obelisk 3]

A-->|Forced Path|FP1[Obelisk 1 is in a big Alcove right when the Zone opens, Checkpoint 1 is forced onto Player]
FP1-->FP2[Follow Edge below Checkpoitn 1 to find a Bridge, from Bridge follow Inner Edge to find Obelisk 2 in a Alcove]
FP2-->FP3[Obelisk 3 is at the Edge opposite to the Entrance]


A-->|No tells|NT1[Follow the Edge opposite to the Waypoint till you find the Bridge, from there move diagonal Zone inwards to find Obelisk 1]
NT1-->NT2[Follow the Zone till you are paralel to the Entrance]
NT2-->|Obelisk 2 along the inner Edge|NT31[Check opposite of Obelisk 2 for Obelisk 3]
NT31-->|Obelisk 3 opposite of Obelisk 2|NT311[Clear Obelisk 3]
NT31-->|No Obelisk 3|NT312[Obelisk 3 is at the Edge opposite to Obelisk 1 Edge paralel to the Entrance]
NT2-->|No Obelisk 2|NT32[Obelisk 2 is at the other Side of the inner Wall, after finding Obelisk 3 return to Entrance and walk there]
NT32-->|Obelisk 3 opposite of Obelisk 2|NT311[Clear Obelisk 3]
NT32-->|No Obelisk 3|NT312[Obelisk 3 is at the Edge opposite to Obelisk 1 Edge paralel to the Entrance]
```

## Layouts

### Variant Table

| Big Props for the initial Research to tobethebest      | And to Crimson for his Visualisation and Naming for some of the Layouts |
| ------------------------------------------------------ | ----------------------------------------------------------------------- |
| ![Red Vale 1](<./img/Red%20Vale/Red%20Vale%20(2).png>) | ![Red Vale 2](<./img/Red%20Vale/Red%20Vale%20(5).png>)                  |
| ![Red Vale 3](<./img/Red%20Vale/Red%20Vale%20(7).png>) | ![Red Vale 4](<./img/Red%20Vale/Red%20Vale%20(3).png>)                  |
| ![Red Vale 5](<./img/Red%20Vale/Red%20Vale%20(4).png>) | ![Red Vale 6](<./img/Red%20Vale/Red%20Vale%20(8).png>)                  |
| ![Red Vale 7](<./img/Red%20Vale/Red%20Vale%20(6).png>) | ![Red Vale 8](<./img/Red%20Vale/Red%20Vale%20(1).png>)                  |

### Points of Interest

3 Obelisks scattered around the Zone
