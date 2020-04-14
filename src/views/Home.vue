<template>
  <div class="main__user_info">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="top__user_name">User User</div>
          <div class="top__user_date">02.10.2020</div>
        </div>
        <form class="col s6">
          <div class="input-field">
            <input placeholder="Enter post title" id="post_title" type="text" class="validate" />
            <label for="post_title">Post title</label>
          </div>

          <div class="input-field">
            <select>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Select post category</label>
          </div>

          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>

          <div class="input-field">
            <textarea id="textarea2" class="materialize-textarea" data-length="500"></textarea>
            <label for="textarea2">Textarea</label>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>