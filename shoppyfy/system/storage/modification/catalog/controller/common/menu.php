<?php
class ControllerCommonMenu extends Controller {
	public function index() {
		$this->load->language('common/menu');

		// Menu
		$this->load->model('catalog/category');

		
			$this->load->model('catalog/product');
			$type="module";
    	$this->load->model('setting/module');
		$result=$this->model_setting_module->getModule($type);
		foreach($result as $result){
			if($result['code']==="blogger"){
				$data['blog_enable'] =1;
			}
		}
			

		$data['categories'] = array();

		$data['contact'] = $this->url->link('information/contact');
		$data['affiliate'] = $this->url->link('affiliate/login', '', true);
		$data['sitemap'] = $this->url->link('information/sitemap');
		$data['manufacturer'] = $this->url->link('product/manufacturer');
		$data['voucher'] = $this->url->link('account/voucher', '', true);
		$data['special'] = $this->url->link('product/special');
		$data['account'] = $this->url->link('account/account', '', true);

		
			$categories = $this->model_catalog_category->getCategories(0);
			$data['home'] = $this->url->link('common/home');
			$data['text_blog'] = $this->language->get('text_blog');
            $data['all_blogs'] = $this->url->link('information/blogger/blogs');
			

		foreach ($categories as $category) {
			if ($category['top']) {
				// Level 2
				$children_data = array();

				$children = $this->model_catalog_category->getCategories($category['category_id']);

				foreach ($children as $child) {
					$filter_data = array(
						'filter_category_id'  => $child['category_id'],
						'filter_sub_category' => true
					);

					
			$childs_data = array();
			$child_2 = $this->model_catalog_category->getCategories($child['category_id']);

			foreach ($child_2 as $childs) {
				$filter_data = array(
					'filter_category_id'  => $childs['category_id'],
					'filter_sub_category' => true
				);

				$childs_data[] = array(
					'name'  => $childs['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
					'href'  => $this->url->link('product/category', 'path=' . $category['category_id'] . '_' . $child['category_id'] . '_' . $childs['category_id'])
				);
			}
				
			$children_data[] = array(
			
						
			'name'  => $child['name'] . ($this->config->get('config_product_count') ? ' (' . $this->model_catalog_product->getTotalProducts($filter_data) . ')' : ''),
			'childs' => $childs_data,
			'column'   => $child['column'] ? $child['column'] : 1,
			
						'href'  => $this->url->link('product/category', 'path=' . $category['category_id'] . '_' . $child['category_id'])
					);
				}

				// Level 1
				$data['categories'][] = array(
					'name'     => $category['name'],
					'children' => $children_data,
					'column'   => $category['column'] ? $category['column'] : 1,
					'href'     => $this->url->link('product/category', 'path=' . $category['category_id'])
				);
			}
		}

		return $this->load->view('common/menu', $data);
	}
}
