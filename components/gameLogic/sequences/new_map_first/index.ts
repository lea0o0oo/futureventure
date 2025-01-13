import type Engine from "../../Engine";
import { Observer, Scene, Vector3, type FreeCamera } from "babylonjs";
import funcs from "~/utils/generalFuncs";
import assistant from "~/utils/assistant";
import utilsMeshes from "~/utils/utilsMeshes";
import { eventBus } from "~/event-bus";

let game: Engine;

const music = new Howl({
  src: ["/sounds/forest_bathing.mp3"],
  volume: 0.3,
});

function waitForProg(infoStore: any): Promise<void> {
  return new Promise((resolve) => {
    const unwatch = watch(
      () => infoStore.progress.progressState,
      (newValue) => {
        if (newValue === 0) {
          unwatch(); // Stop watching once the condition is met
          resolve();
        }
      }
    );
  });
}

async function sequence() {
  const tasksStore = useTasksStore();
  const gameState = useGameStateStore();
  const generalData = useGeneralStore();
  const infoStore = useInfoStore();

  const camera = game.getCamera() as FreeCamera;

  // await funcs.delay(3000);

  if (gameState.currentMap != "nasa") {
    eventBus.dispatchEvent(new CustomEvent("to_nasa", { detail: sequence }));
    return;
  }

  music.play();
  infoStore.slideState = 1;

  camera.position = new Vector3(5.267, 3.984, -6.074);
  camera.rotation = new Vector3(
    funcs.degToRad(8.62),
    funcs.degToRad(273.89),
    0
  );

  await funcs.delay(2000);

  assistant.say(
    "Adesso stiamo nel centro di controllo della agenzia spaziale nazionale",
    {
      duration: 4000,
      icon: "normal",
    }
  );

  await funcs.delay(2500);

  assistant.say(
    "Sembrano voler monitorare un satellitle sperimentale che comunica con i laser invece che le onde radio",
    {
      duration: 4000,
      icon: "normal",
    }
  );

  await funcs.delay(1000);

  // step 1
  infoStore.showComponent = true;
  infoStore.resetProgress(2);
  infoStore.progress.slideshowPlaying = true;
  infoStore.show = true;

  // step 2
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(5);

  // step 3
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(1.5);

  // step 4
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(1);

  // step 5
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(0.8);

  // step 6
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(1);

  // step 7
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(1.2);

  // step 8
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(1.2);

  // step 9
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(1.2);

  // step 10
  await waitForProg(infoStore);

  infoStore.slideState++;

  infoStore.resetProgress(0.75);

  await waitForProg(infoStore);

  infoStore.show = false;
  infoStore.showComponent = false;

  await funcs.delay(2000);

  assistant.say("Direi che è il momento per il tuo compito finale", {
    duration: 4000,
    icon: "normal",
  });
}

export default async (cGame: Engine) => {
  game = cGame;
  sequence();
};
