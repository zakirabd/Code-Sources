<?php
	
	include('connect.php');
	//LOOP FUNCTION
	function loops(){
	// FOR LOOP
		for ($i = 1; $i <= 10; $i++) {
	    	echo 'for loop'. $i. '<br>';
		}

	// 	FOR EACH LOOP
		$arr = array(1, 2, 3, 4);

		foreach ($arr as $value) {
			echo 'foreach loop'.  $value. '<br>';
		}

	// 	WHILE LOOP
		$x = 1;

		while($x <= 5) {
		  echo 'while loop'. $x. "<br>";
		  $x++;
		}
	};
	
	if (isset($_GET['loop'])) {
		loops();
	}

	//ARRAY
	$array = array(
	  array(
	    'id' => 1,
	    'first_name' => 'Zakir',
	    'last_name' => 'Abdurrahimov',
	  ),
	  array(
	    'id' => 2,
	    'first_name' => 'Anar',
	    'last_name' => 'Memmemdov',
	  ),
	  array(
	    'id' => 3,
	    'first_name' => 'Tehran',
	    'last_name' => 'Recebov',
	  )
	);

	// PUSH METHOD FUNCTION
	function push_array($array){
		
		$new_array = array(
			'id' => 4,
			'first_name' => 'Kamran',
			'last_name' => 'Qocayev'
			
		);

		array_push($array, $new_array);
		// print_r($array);
	}

	push_array($array);

	// UNSHIFT METHOD FUNCTION
	function unshift_array($array){
		
		$new_array = array(
			'id' => 0,
			'first_name' => 'Kamran',
			'last_name' => 'Qocayev'
			
		);

		array_unshift($array, $new_array);
		// print_r($array);
	}

	unshift_array($array);

	// POP METHOD FUNCTION
	function pop_array($array){

		array_pop($array);
		// print_r($array);
	}

	pop_array($array);

	// SHIFT METHOD FUNCTION
	function shift_array($array){

		array_shift($array);
		// print_r($array);
	}

	shift_array($array);


	function select_user_function($conn){

		$users=[];
		$db = 'SELECT * FROM `users`';
		$query = mysqli_query($conn, $db);

		if ($query ) {
			while ($row = mysqli_fetch_assoc($query)) {
				$count = 0;

				$users[$count]['id'] = $row['ID'];
				$users[$count]['firstname'] = $row['firstname'];
				$users[$count]['lastname'] = $row['lastname'];

				$count++;
			}
			echo json_encode($users);
		}
	}

	if (isset($_GET['users'])) {
		if ($_GET['users'] == 'fetch') {
			select_user_function($conn);
		}
	}

	// INSERT DATA INTO DATABASE
	$new_array_insert = array(
		'id' => 0,
		'first_name' => 'Kamran',
		'last_name' => 'Qocayev'
		
	);

	function insert_data($conn, $new_array_insert){

		$id = $new_array_insert['id'];
		$first_name = $new_array_insert['first_name'];
		$last_name = $new_array_insert['last_name'];

		$db = "INSERT INTO `users` (`ID`, `firstname`, `lastname`) VALUE ('$id', '$first_name', '$last_name')";
		$query = mysqli_query($conn, $db);
		if ($query) {
			echo "insert success";
		}
	}

	if (isset($_GET['insert'])) {

		insert_data($conn, $new_array_insert);

	}

	//  UPDATE DATA IN DATABASE
	function update_data($conn){

		$db = "UPDATE `users` SET `firstname` = 'Zakir' WHERE ID = 1";
		$query = mysqli_query($conn, $db);
		if ($query) {
			echo "Update success";
		}
	}

	if (isset($_GET['update'])) {

		update_data($conn);

	}

	//DELETE DATA FROM DATABASE
	function delete_data($conn){

		$db = "DELETE FROM `users` WHERE ID = 1";
		$query = mysqli_query($conn, $db);
		if ($query) {
			echo "Delete success";
		}
	}

	if (isset($_GET['delete'])) {

		delete_data($conn);

	}


?>