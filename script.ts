import { Photon } from '@generated/photon';

const photon = new Photon();

// A `main` function so that we can use async/await
async function main() {
  const data = await photon.comments.update({
    data: {
      childs: {
        create: {
          value: 'something',
          childs: {
            connect: {
              id: 'something',
            },
          },
        },
      },
    },
    where: {
      id: 'someid',
    },
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
