import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { Scene } from "../../congif/core/scene"
import { SceneController } from "../../congif/core/sceneController"
import { SceneLocations } from "../../congif/enums"
import { ExitPlane } from "../../utils/exitPlane"
import { movePlayerToVector3 } from "../../utils/movePlayerToVector3"

class KPMGBankInstance extends Scene {
    //environment
    private bankMainGeo = new Entity()
    private bankExitDoor= new Entity()
    private bankAnimatedObject = new Entity()
    private bankFurniture = new Entity()
    private bankFurnitureCols = new Entity()
    //utils
    private exitDoor =new ExitPlane()



    constructor() {
        super(SceneLocations.KPMGBank)
        this.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_collider_11.glb'))
        this.bankMainGeo.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_main_geo_6.glb'))
        this.bankExitDoor.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_exit_door_1.glb'))
        this.bankAnimatedObject.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_animated_object_1.glb'))

        this.bankFurniture.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_decor_main_geo_1.glb'))
        this.bankFurnitureCols.addComponent(new GLTFShape('models/KPMG/bank/kpmg_bank_decor_colliders_1.glb'))

        this.bankMainGeo.setParent(this)
        this.bankExitDoor.setParent(this)
        this.bankAnimatedObject.setParent(this)

        this.bankFurniture.setParent(this)
        this.bankFurnitureCols.setParent(this)

        this.exitDoorPortal()
    }
    preload() {
        engine.addEntity(this)
        log('preloaded bank!')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('Event bank Removed.')
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
            position: new Vector3(16.26,2.30,77.53),
            scale: new Vector3(4.000, 4.000, 5.000),
            rotation: new Quaternion().setEuler(360.000, 212.000, 1.000),
        }))
        this.exitDoor.onCameraEnter = () => this.goInterior(
            new Vector3(17.48,0.98,6.15),
            new Vector3(32.15, 1.33, 4.72),
        )


    }
    goInterior(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KPMGInterior)
        movePlayerToVector3(position, direction)
    }
  
}

export const KPMGBank= new KPMGBankInstance()