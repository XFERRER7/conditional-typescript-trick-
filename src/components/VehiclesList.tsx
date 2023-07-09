import React = require('react');

interface IVehicle {
  codigo: string;
  nome: string;
}

type TdataApi<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; message: string };

export const VehiclesList = () => {
  const [data, setData] = React.useState<TdataApi<IVehicle[]>>();

  async function getVehicleData() {
    const response = await fetch(
      'https://parallelum.com.br/fipe/api/v1/carros/marcas'
    );

    let data: TdataApi<IVehicle[]> = null;

    try {
      const vehicles = await response.json();

      data = {
        status: 'success',
        data: vehicles,
      };
    } catch (err: any) {
      data = {
        status: 'error',
        message: err.message,
      };
    }

    setData(data);
  }

  React.useEffect(() => {
    getVehicleData();
  }, []);

  return (
    <div>
      <ul>
        {
          data?.status === 'success' && data.data.map((vehicle => {
            return (
              <li key={vehicle.codigo}>{vehicle.nome}</li>
            )
          }))
        }
      </ul>
    </div>
  );
};
