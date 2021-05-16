<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <Breadcrumb :title="breadcrumb.title" :subtitle="breadcrumb.subtitle"></Breadcrumb>
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" class="container">
                {{ data }}
                
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb";

export default {

    data() {
        return {
            breadcrumb: {
                title: 'Dashboard',
                subtitle: 'Test'
            },
            data: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsam corporis expedita perspiciatis pariatur architecto repudiandae ut libero atque natus illo officiis eos repellat provident nesciunt perferendis facere ab cupiditate, vero reiciendis voluptatum asperiores culpa vel. Doloremque sequi ipsum illo aspernatur quo iste eum molestiae debitis numquam reiciendis, assumenda accusamus adipisci deserunt molestias sapiente accusantium hic eligendi nam veritatis voluptatem vitae voluptatibus placeat tempora nobis. Sapiente nam, culpa iure distinctio asperiores neque nulla doloribus quod sunt commodi ut sit expedita, dicta veniam deleniti ab rerum aliquid consequuntur velit libero et similique harum, enim fuga! Praesentium nam blanditiis reprehenderit earum nulla exercitationem, magni sed iusto alias mollitia iste cupiditate quia et unde, dolorem, ratione a. Voluptas ab hic saepe impedit, fuga voluptatibus praesentium quam rem aspernatur, atque architecto optio? Ea molestiae accusantium laboriosam ipsa velit laudantium rem non, exercitationem obcaecati aperiam odit totam ratione repudiandae eaque, harum tempora? Fuga possimus sed officia iste minus ea consequatur, quisquam, asperiores pariatur cumque sit veniam ad nobis aliquid corrupti deleniti maiores recusandae molestias. Dolorum optio quibusdam voluptate iste velit vero placeat itaque et, error magnam eum tempora inventore sequi maxime atque dolore ut saepe, pariatur cupiditate sint quaerat incidunt aliquam deserunt corrupti. Nesciunt, unde!'
        }
    },

    name: "Home",
    components: {
        Breadcrumb
    }
};
</script>
