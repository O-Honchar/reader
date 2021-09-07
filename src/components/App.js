import React, { Fragment } from 'react';
import Article from './Article';

function App() {
  const articles = [
  {
    "id": "4db49f19-9aa2-4faf-9862-a97efaefd21c",
    "title": "Voluptatum sunt quod aut quaerat quae recusandae hic.",
    "text": "Ut quis culpa quam eos sunt. Nam et autem et sit. Quas accusantium est dolorem temporibus. In modi consequuntur sed nihil. Aut et ea accusantium aut tenetur et. Itaque temporibus temporibus. Rerum ut provident. Maxime qui est aut. Sit fugiat qui ullam. Dolorem non officia amet consequatur veritatis soluta mollitia molestias recusandae. Nostrum consequatur voluptates est vel libero. Velit magni voluptas ullam delectus. Aut laboriosam harum eius numquam est blanditiis sequi nihil. Sit et id pariatur rerum sit vero. Aspernatur ea quo animi similique debitis labore nesciunt quod ex. Similique deleniti in dolorum perspiciatis asperiores consequuntur dignissimos qui. Sit ut aut ex iusto ut dolor omnis. Doloribus similique omnis numquam mollitia tempore. Veniam ea officia quasi consequuntur placeat quam a. Eligendi sapiente et facere voluptatem. Rerum autem ipsam nihil. Iusto voluptatibus ut dolor et voluptatibus eaque adipisci. Itaque quod nesciunt sapiente. Incidunt at tempore nihil molestiae esse nulla. Et repudiandae cumque enim dolor."
  },
  {
    "id": "b618b4c0-c47f-44df-9c1a-955b775d6b2f",
    "title": "Incidunt ipsam nemo recusandae est officiis eos laboriosam.",
    "text": "Natus veniam perferendis accusantium praesentium iure qui molestias rerum. Enim perspiciatis adipisci dolor. Qui labore ea deserunt laborum blanditiis. Est odio rerum sunt. Qui aut aspernatur molestiae illo nesciunt excepturi tempore accusantium. Ipsam ratione et optio odit. Quidem et dolores aut aut earum dolorem sed magnam. In aut aut voluptatem vitae. Quidem voluptatum dolorum voluptas a et. Aut qui dolore nemo voluptates nihil quidem sequi amet. Eum dolorem est ut vel voluptate ad. Sit qui voluptate sunt iste ipsum iure dolores. Molestiae expedita accusamus facere saepe et neque quia. Vel aliquam autem totam accusantium laborum vel aperiam quisquam enim. Saepe doloremque doloremque adipisci voluptas nihil et. Reiciendis quis ut aut. Doloremque eius nostrum rerum quaerat nulla labore. Autem quaerat minus. Iusto consequatur exercitationem est cum facere culpa hic. Dolor deserunt necessitatibus. Cumque quis dolorem aut et a sint ut vel nulla. Occaecati dicta aliquam est. Quo aliquam eum tempore itaque. Blanditiis odio accusantium voluptatem voluptas. Vel ex at in incidunt tempora blanditiis ut. Facilis aut et ducimus consequuntur aperiam. Eveniet repellat aliquam aut quia labore dolores non eius est. Totam qui facere quaerat deleniti qui vel quos. Beatae maxime quo placeat. Eum sit vel iusto."
  },
  {
    "id": "822c3b86-b423-425c-8be8-40fe06da3fd5",
    "title": "Ullam facere accusamus qui qui asperiores nihil corporis in.",
    "text": "Qui aspernatur eum quibusdam enim reprehenderit doloribus molestiae est dolorum. Veritatis non nihil. Beatae nemo sit esse quas enim ut. Sed consequatur sit molestias sequi minus perspiciatis aliquid voluptates sed. Harum natus ea qui et sed. Velit qui consectetur et quisquam optio iste similique mollitia blanditiis. Quos iusto at voluptatum explicabo unde voluptas excepturi sit. Ad distinctio non aut unde at. Saepe omnis eos id corrupti ducimus. Id adipisci blanditiis et saepe quia. Voluptas iste vel et error est. Aut architecto qui dolor qui voluptas. Qui et consequatur distinctio. Odio ut est aut autem cum iste voluptatum. Esse minus et nesciunt dolore labore voluptatem cumque. Iste qui maxime dolores officia aliquid aut iusto possimus sit. Voluptatum earum consequatur velit necessitatibus sequi repellat mollitia aut quis. In reprehenderit totam quo sit. Ut deleniti sequi voluptas sunt voluptatem qui voluptatem nobis libero. Ullam vero velit doloremque ipsum sint culpa. Reiciendis corporis saepe quibusdam exercitationem molestias veniam. Id natus temporibus qui facilis libero voluptatem occaecati aut voluptatum. Voluptatem quos quos. Molestiae molestiae dolorum voluptatem aliquam voluptas. Dolorem doloribus qui ut. Perspiciatis vero exercitationem ut placeat eos et reprehenderit et."
  }
];

  return (
    <Fragment>
      <Article {...articles[0]} />
    </Fragment>
  );
}

export default App;
