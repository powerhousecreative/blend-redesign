		<!-- START CTA -->
		<section class="light" id="cta">
			<div class="container no-slant-top">
				<div class="row">
					<div class="col fade-in fade-in-1">
						<h3>Interested in starting a project with us?</h3>
						<a href="#" data-remodal-target="cta-modal" class="btn btn-dark btn-cta">get a quote</a>
					</div>
				</div>
			</div>
		</section>
		<!-- END CTA -->

		<!-- START FOOTER -->
		<footer class="dark slant slant-top">
			<div class="container footer-content">
				<div class="row">
					<div class="col-md md-3">
						<ul>
							<li>Office</li>
							<li><span class="divider"></span></li>
							<li>700 S Flower St. Suite 2990</li>
							<li>Los Angeles, CA 90017</li>
						</ul>
					</div>
					<div class="col-md md-3">
						<ul>
							<li>Contact</li>
							<li><span class="divider"></span></li>
							<li>323.845.9655</li>
							<li><a href="#" class="email-link">blend@weareblend.la</a></li>
						</ul>
					</div>
					<div class="col-md md-3">
						<ul>
							<li>More Links</li>
							<li><span class="divider"></span></li>
							<li><a href="/clients">Clients</a></li>
							<li><a href="/blog">Blog</a></li>
						</ul>
					</div>
					<div class="col-md md-3 invisible"></div>
					<img class="logo-footer" src="../images/logo-footer.svg" alt="blend.">
				</div>
			</div>
			<div class="container copyright">
				<div class="row">
					<div class="col-md md-12 cf">
						<ul>
							<li>
								<a href="#"><i class="icon-social icon-fb"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-social icon-linkedin"></i></a>
							</li>
							<li>
								<a href="#"><i class="icon-social icon-ig"></i></a>
							</li>
						</ul>
						<p>&copy; <?php echo date("Y") ?> blend. All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
		<!-- END FOOTER -->
	</div>
	
	<!-- START GET QUOTE MODAL -->
	<div class="remodal" data-remodal-id="cta-modal">
		<a data-remodal-action="close" class="remodal-close">
			<i class="icon-close"></i>
		</a>
		<div class="modal-header">
			<h3>Tell us about your project</h3>
			<span class="divider"></span>
			<p>If you tell us a bit about your project we can contact you with more specific pricing information. We’re also always up to chat if you’d like to call us directly.</p>
			<ul>
				<li><a href="#">blend@weareblend.la</a></li>
				<li>310.845.9655</li>
			</ul>
		</div>
		<form class="modal-form">
			<div class="modal-content">
				<div class="form-group required">
					<input type="text" class="form-control" required placeholder="Full Name">
				</div>
				<div class="form-group required">
					<input type="email" class="form-control" required placeholder="Email Address">
				</div>
				<div class="form-group required">
					<input type="text" class="form-control" required placeholder="Company/Organization">
				</div>
				<div class="form-group">
					<input type="text" class="form-control" placeholder="Phone Number">
				</div>
				<div class="form-group required">
					<select class="form-control" required>
						<option value="option1">Option1</option>
						<option value="option2">Option2</option>
						<option value="option3">Option3</option>
						<option value="option4">Option4</option>
						<option value="option5">Option5</option>
					</select>
				</div>
				<div class="form-group required">
					<textarea class="form-control" rows="6" required placeholder="Project Details"></textarea>
				</div>
			</div>
			<div class="modal-footer">
				<button type="submit" class="btn btn-dark"> Submit</button>
			</div>
		</form>
	</div>
	<!-- START GET QUOTE MODAL -->

<!-- DEPENDENCIES -->
<script src="../js/jquery-1.11.3.min.js"></script>
<script src="../js/lib.min.js"></script>

<!-- SCRIPTS -->
<script src="../js/main.js"></script>

</body>
</html>