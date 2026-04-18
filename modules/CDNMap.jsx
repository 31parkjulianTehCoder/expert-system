const CDNMap = ({ coordinates, zoom = 5}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.L) return;

    // Initialize map
    const map = window.L.map(mapRef.current).setView(coordinates, zoom);

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    window.L.marker(coordinates).addTo(map)
      .bindPopup(`Marker at ${coordinates[0]}, ${coordinates[1]}`)
      .openPopup();

    return () => map.remove();
  }, [coordinates, zoom]); // re-run effect if coordinates or zoom change

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};
