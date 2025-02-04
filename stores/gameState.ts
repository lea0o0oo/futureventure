import { defineStore } from "pinia";

/* PROGRESS
 0 - Player completely new, never done a task
 1 - Player has done the first task
 2 - Player has done the second task
*/

export const useGameStateStore = defineStore({
  id: "gameStateStore",
  state: () => ({
    xp: 0,
    progress: 0,

    smallEngine: false,
    minigames: {
      traffic_light: {
        fixed_microprocessor: {
          status: false,
          reward: 10,
        },
        fixed_code: {
          status: false,
          reward: 30,
        },
        implemented_updates: {
          status: false,
          reward: 10,
        },
      },
      cables_fix: {
        completion: {
          status: false,
          reward: 10,
        },
        first_try: {
          status: true,
          reward: 10,
        },
      },
      antenna_fix: {
        ideal_frequency: {
          status: false,
          reward: 50,
        },
        normalized_signal: {
          status: false,
          reward: 30,
        },
      },

      satellite_fix: {
        point_earth: {
          status: false,
          reward: 30,
        },
        solarstorm_handle: {
          status: false,
          reward: 50,
        },
        data_transfer: {
          status: false,
          reward: 45,
        },
        every: {
          status: false,
          reward: 70,
        },
      },
    },
    dialogs: {
      traffic_light: {
        intro: false,
        blocks: false,
      },
    },
    currentMap: "main" as "main" | "nasa",
  }),
  actions: {},
});
