import { dynamicData } from "@/store";
import { TrainerData } from "@/store/types-trainers";

function Trainer({ trainer }: { trainer: TrainerData; }) {
    return (
        <div className="img-text-box traaaaner">
            <div className="col-text">
                <h3 className="title-small">{trainer.header1}</h3>
                <h2>{trainer.header2}</h2>
                {
                    trainer.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                }
            </div>

            {trainer.imageUrl
                ? <img src={trainer.imageUrl} alt={trainer.header2} />
                : <div className="col-image" />
            }
        </div>
    );
}

export function Trainers() {
    return (
        <div className="traaaaner-parent">
            {
                dynamicData.trainers.map((trainer, index) => <Trainer key={index} trainer={trainer} />)
            }
        </div>
    );
}
