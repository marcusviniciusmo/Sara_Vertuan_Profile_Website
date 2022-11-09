import { Header } from "components/Header";
import { Sidebar } from "components/Sidebar"
import { GallerySlider } from "components/GallerySlider";
import { Interface } from "styles/Interface";

export function Gallery() {
  return (
    <div>
      <Header />

      <Sidebar />

      <Interface>
        <GallerySlider />
      </Interface>
    </div>
  );
};