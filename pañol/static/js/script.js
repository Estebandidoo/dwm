$(document).ready(function(){
	//AGREGANDO CLASE ACTIVE A PRIMER ENLACE, CATEGORY ALL
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');	

	$('.category-item').click(function(){
		
		//VARIABLES
		var catProduct=$(this).attr('category');
		console.log(catProduct);

		//AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category-item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		//OCULTAR PRODUCTOS
		$('.producto-item').hide();
		//MOSTRAR PRODUCTOS
		$('.producto-item[category="'+catProduct+'"]').show();
	});
});
