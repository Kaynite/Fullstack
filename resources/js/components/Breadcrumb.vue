<template>
      <div class="toolbar" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
            <div class="d-flex align-items-center me-3">
                <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">{{ title }}
                    <span class="h-20px border-gray-200 border-start ms-3 mx-2"></span>
                    <small class="text-muted fs-7 fw-bold my-1 ms-1">{{ subtitle }}</small>
               </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',

    props : ['title', 'subtitle']
}
</script>
