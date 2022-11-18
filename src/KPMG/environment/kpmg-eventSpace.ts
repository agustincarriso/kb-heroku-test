import { Dash_Material, Dash_Wait } from "dcldash"
import { Scene } from "../../congif/core/scene"
import { SceneController } from "../../congif/core/sceneController"
import { SceneLocations } from "../../congif/enums"
import { ExitPlane } from "../../utils/exitPlane"
import { movePlayerToVector3 } from "../../utils/movePlayerToVector3"

class KPMGEventInstance extends Scene {
    //Environment
    private eventSpaceMainGeo = new Entity()
    private bankExitDoor = new Entity()
    //Utils
    private exitDoor = new ExitPlane()


    constructor() {
        super(SceneLocations.KPMGEvent)
        this.addComponent(new GLTFShape('models/KPMG/eventSpace/kpmg_events_collider_1.glb'))
        this.eventSpaceMainGeo.addComponent(new GLTFShape('models/KPMG/eventSpace/kpmg_events_main_geo_1.glb'))
        this.bankExitDoor.addComponent(new GLTFShape('models/KPMG/eventSpace/kpmg_events_exit_door_1.glb'))

        this.eventSpaceMainGeo.setParent(this)
        this.bankExitDoor.setParent(this)
        this.exitDoorPortal()
    }
    preload() {
        engine.addEntity(this)
        log('preloaded eventSpace!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('Event space Preload Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    exitDoorPortal() {
        [this.exitDoor,
        ].forEach(ExitPlane => {
            ExitPlane.addComponent(Dash_Material.transparent())
            ExitPlane.setParent(this)
        })

        this.exitDoor.addComponentOrReplace(new Transform({
            position: new Vector3(15.72,1.28,6.98),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(360.000, 212.000, 1.000),
        }))
        this.exitDoor.onCameraEnter = () => this.goInterior(
            new Vector3(43.65,0.98,31.679),
            new Vector3(32.15, 1.33, 4.72),
        )


    }
    goInterior(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KPMGInterior)
        movePlayerToVector3(position, direction)
    }

}

export const KPMGEvent = new KPMGEventInstance()