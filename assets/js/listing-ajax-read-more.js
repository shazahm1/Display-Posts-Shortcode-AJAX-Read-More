// noinspection JSUnresolvedVariable
( function( $ ) {

	$( '.display-posts-listing .excerpt-more' ).click( function( e ) {

		e.preventDefault();

		const me = $( this );

		// Endpoint from wpApiSetting variable passed from wp-api.
		let endpoint = wpApiSettings.root + 'wp/v2/posts/';
		let meta     = me.closest( '.listing-item' ).find( 'span:first' );

		$.ajax( {
			url:    endpoint + meta.data( 'post-id' ),
			method: 'GET',
		} ).done( function( response ) {

			// console.log( response );
			me.closest( '.listing-item' ).find( '.excerpt' ).replaceWith( $( '<div class="post-content">' + response.content.rendered + '</div>') );

		} ).fail( function( response ) {

			console.log( response.responseJSON.message );
		} );
	} );
} )( jQuery );
