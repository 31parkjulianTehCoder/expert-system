const CDNMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Wait for the global L to exist
    if (!window.L) return;

    // Initialize the map
    const map = window.L.map(mapRef.current).setView([51.505, -0.09], 13);

    // Add tiles
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Add a marker
    window.L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('Hello! I am a marker.')
      .openPopup();

    // Cleanup on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};
