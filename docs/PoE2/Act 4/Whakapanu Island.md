---
sidebar_position: 8
---

# Whakapanu Island

## Zone Read

:::tip Simple Read
Follow the Non-Checkpoint Edge
:::

Whakapanu is a solved Zone with 8 Layouts. It is the Red Vale of Act 4 and has distinct indicators or their lack as a indicator to solve which variant it is.
The Zone contains 4 Point of Interest or Enviromental Tells that Matter for the Zone Read

- Hook or Claw Shaped Beach Tile near the Entrance
- Crabshell Cavern if apearing near the Entrance
- Square Corner
- Shark Pit for one specific Layout

Each Indicator can be found by following the Non-CP Edge until you either find one or find the Exit. To fully understand the Zone Reads some amount of Practice Run is required.

In most layout variants the different Point of Interest are interchangable and they are not included in the Zone Read.
For the Neither Layouts keep in Mind rotating and mirroring Layouts exist. The term Down is used due to lack of explanation otherwise. The Down is defined as the direction opposite to the Initial movement zone inwards along the non-cp edge.

```mermaid
graph TD;
A[Follow Non-CP Edge]-->|Hook|Hook[Move Zone Inwards straight away from Hook]
A-->|Early Crab|Crab
A-->|Neither|Nothing[Continue to follow Edge]
Hook-->|Found Boss|HookBoss[Assume Hook and Boss Are one Edge, move opposite to that Edge]
Hook-->|Found Exit|HookExit[Enter Singing Caverns]
Crab-->|CP at Beach Entrance|CrabCP[Follow Crab Edge]
CrabCP-->|Zone curves with Crab Edge|CrabCPCurve[Continue to follow Crab Edge]
CrabCP-->|Zone curves away from Crab Edge|CrabCPCounterCurve[Swap to follow Inner Zone Edge]
Crab-->|CP further into Beach|CrabLateCP[Follow Crab Edge opposite to Entrance]
Nothing-->|Path Splits with option to go downwards|Something[Move Downwards]
Something-->|Found a Beach|S1[Continue to follow Edge to find Exit]
Something-->|Path Splits,no option down|S2[Move to opposite Edge of Entrance to find Exit]
```

Layout Images yoinked from Arko from Campaign Codex Discord and Zone Read based on Lundburgerrs. Big Props to those two!

## Layouts

### Variant Table Examples

| Straigth Walk Layouts                                                                                                            | U Turn Layouts                                                                                                                                                                       | S Pathing Layouts                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hook with Exit opposite![Wahakapnu Island 4](<./img/Whakapanu%20Island/Whakapanu%20Island%20(4).png>)                            | Just follow Non-CP Edge ![Wahakapnu Island 2](<./img/Whakapanu%20Island/Whakapanu%20Island%20(2).png>)                                                                               | Starts like U Layouts, but long Down Pathing. move opposite to Entrance when reaching Beach![Wahakapnu Island 1](<./img/Whakapanu%20Island/Whakapanu%20Island%20(1).png>)                 |
| Early Crab with Late CP, Exit opposite to Entrance![Wahakapnu Island 8](<./img/Whakapanu%20Island/Whakapanu%20Island%20(8).png>) | Early Crab U Rotation along the Crab Edge, just follow Non-CP Edge![Wahakapnu Island 3](<./img/Whakapanu%20Island/Whakapanu%20Island%20(3).png>)                                     | Starts like U Turn, but Down PAthing Ends early, forced to move Opposite to Entrance. Exit at Opposite Edge![Wahakapnu Island 5](<./img/Whakapanu%20Island/Whakapanu%20Island%20(5).png>) |
|                                                                                                                                  | Early Crab, but U Rotation opposite to Crab Edge, once noticed find inner Edge and follow to find Exit![Wahakapnu Island 6](<./img/Whakapanu%20Island/Whakapanu%20Island%20(6).png>) |
|                                                                                                                                  | Hook, but Boss Room opposite and Exit South of Boss ![Wahakapnu Island 7](<./img/Whakapanu%20Island/Whakapanu%20Island%20(7).png>)                                                   |

### Points of Interest

Shark Pit - Great White One drops Shark Fin, which can be handed in for a LvL 4 Support Gem or LvL 11 Skill / Spirit Gem  
Crabshell Cavern - Rare Miniboss CLawcrunch drops LvL 4 Support Gem  
Petrified Pirate - Interactiable Object drops Torn Map Piece
