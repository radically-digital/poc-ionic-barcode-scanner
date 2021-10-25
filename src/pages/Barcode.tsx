import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "../components/ExploreContainer.css";
import "./Page.css";

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { useState } from "react";

const Barcode: React.FC = () => {
  const name = "Barcode Page";
  const [data, setData] = useState("");
  const dataToScan = async () => {
    const data = await BarcodeScanner.scan();
    alert(JSON.stringify(data));
    setData(data.text);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <strong>{data || "No Data"}</strong>
          <p>
            <IonButton color="danger" expand="block" onClick={dataToScan}>
              Scan Data
            </IonButton>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Barcode;
