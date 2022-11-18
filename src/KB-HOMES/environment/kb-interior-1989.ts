import { Dash_Material, Dash_Tweaker, Dash_Wait } from "dcldash"
import { Scene } from "src/congif/core/scene"
import { SceneController } from "src/congif/core/sceneController"
import { SceneLocations } from "src/congif/enums"
import { ExitPlane } from "src/utils/exitPlane"
import { movePlayerToVector3 } from "src/utils/movePlayerToVector3"


class KBInterior1989Instance extends Scene {
    //environment
    private kbInterior1989Geo = new Entity()
    private kbInterior1989Furniture = new Entity()
    //utils
    private kbInterior1989ExitDoor = new ExitPlane()
    constructor() {
        super(SceneLocations.KBInterior1989)
        this.addComponent(new GLTFShape('models/KB-HOMES/interior-1989/KBH_Interior_model1989_collider.glb'))
        this.kbInterior1989Geo.addComponent(new GLTFShape('models/KB-HOMES/interior-1989/KBH_Interior_model1989_MainGeo.glb'))
        this.kbInterior1989Furniture.addComponent(new GLTFShape("models/KB-HOMES/interior-1989/KBH_Interior_model1989_furniture.glb"))

        this.kbInterior1989Geo.setParent(this)
        this.kbInterior1989Furniture.setParent(this)
        this.createExitDoor()

    }
    preload() {
        engine.addEntity(this)
        log('kb interior preloaded')
        this.addComponent(new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) }))
        Dash_Wait(() => {
            engine.removeEntity(this)
            log('kb interior Removed.')
            this.removeComponent(Transform)
            this.addComponent(new Transform({
                position: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1)
            }))
        }, 5)
    }
    createExitDoor() {
        [this.kbInterior1989ExitDoor].forEach(ExitPlane => {
            ExitPlane.setParent(this)
            ExitPlane.addComponent(Dash_Material.transparent())
        })

        this.kbInterior1989ExitDoor.addComponentOrReplace(new Transform({
            position: new Vector3(15.960, 1.180, 22.650),
            scale: new Vector3(3.400, 1.000, 2.000),
            rotation: new Quaternion().setEuler(1.000, 71.000, 92.000),
        }))
        this.kbInterior1989ExitDoor.onCameraEnter = () => this.exitToCulDeSac(
            new Vector3(17.71,0.98,25.72),
            new Vector3(26.40,1.04,33.98),
        )
    }
    exitToCulDeSac(position: Vector3, direction: Vector3) {
        SceneController.loadScene(SceneLocations.KBCulDeSac)
        movePlayerToVector3(position, direction)
    }

}

export const KBInterior1989 = new KBInterior1989Instance()